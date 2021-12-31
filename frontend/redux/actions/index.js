import * as Notifications from 'expo-notifications';
import firebase from 'firebase';
import { Constants } from 'react-native-unimodules';
import { CLEAR_DATA, USERS_DATA_STATE_CHANGE, USERS_LIKES_STATE_CHANGE, USERS_POSTS_STATE_CHANGE, USER_CHATS_STATE_CHANGE, USER_FOLLOWING_STATE_CHANGE, USER_POSTS_STATE_CHANGE, USER_STATE_CHANGE } from '../constants/index';
require('firebase/firestore')


let unsubscribe = [];

export function clearData() {
    return ((dispatch) => {
        for (let i = unsubscribe; i < unsubscribe.length; i++) {
            unsubscribe[i]();
        }
        dispatch({ type: CLEAR_DATA })
    })
}
export function reload() {
    return ((dispatch) => {
        dispatch(clearData())
        dispatch(fetchUser())
        dispatch(setNotificationService())
        dispatch(fetchUserPosts())
        dispatch(fetchUserFollowing())
        dispatch(fetchUserChats())

    })
}

export const setNotificationService = () => async dispatch => {
    let token;
    if (Constants.isDevice) {
        const existingStatus = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus.status !== 'granted') {
            const status = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }

        if (finalStatus.status !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync());
    } else {
        alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: false,
            shouldSetBadge: false,
        }),
    });

    if (token != undefined) {
        firebase.firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .update({
                notificationToken: token.data,
            })
    }

}

export const sendNotification = (to, title, body, data) => dispatch => {
    if (to == null) {
        return;
    }

    let response = fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            to,
            sound: 'default',
            title,
            body,
            data
        })
    })

}

export function fetchUser() {
    return ((dispatch) => {
        let listener = firebase.firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .onSnapshot((snapshot, error) => {
                if (snapshot.exists) {
                    dispatch({ type: USER_STATE_CHANGE, currentUser: { uid: firebase.auth().currentUser.uid, ...snapshot.data() } })
                }
            })
        unsubscribe.push(listener)
    })
}

export function fetchUserChats() {
    return ((dispatch) => {
        let listener = firebase.firestore()
            .collection("chats")
            .where("users", "array-contains", firebase.auth().currentUser.uid)
            .orderBy("lastMessageTimestamp", "desc")
            .onSnapshot((snapshot) => {
                let chats = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                })

                for (let i = 0; i < chats.length; i++) {
                    let otherUserId;
                    if (chats[i].users[0] == firebase.auth().currentUser.uid) {
                        otherUserId = chats[i].users[1];
                    } else {
                        otherUserId = chats[i].users[0];
                    }
                    dispatch(fetchUsersData(otherUserId, false))
                }

                dispatch({ type: USER_CHATS_STATE_CHANGE, chats })
            })
        unsubscribe.push(listener)
    })
}
export function fetchUserPosts() {
    return ((dispatch) => {
        firebase.firestore()
            .collection("posts")
            .doc(firebase.auth().currentUser.uid)
            .collection("userPosts")
            .orderBy("creation", "desc")
            .get()
            .then((snapshot) => {
                let posts = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                })
                dispatch({ type: USER_POSTS_STATE_CHANGE, posts })
            })
    })
}


export function fetchUserFollowing() {
    return ((dispatch) => {
        let listener = firebase.firestore()
            .collection("following")
            .doc(firebase.auth().currentUser.uid)
            .collection("userFollowing")
            .onSnapshot((snapshot) => {
                let following = snapshot.docs.map(doc => {
                    const id = doc.id;
                    return id
                })
                dispatch({ type: USER_FOLLOWING_STATE_CHANGE, following });
                for (let i = 0; i < following.length; i++) {
                    dispatch(fetchUsersData(following[i], true));
                }
            })
        unsubscribe.push(listener)
    })
}

export function fetchUsersData(uid, getPosts) {
    return ((dispatch, getState) => {
        const found = getState().usersState.users.some(el => el.uid === uid);
        if (!found) {
            firebase.firestore()
                .collection("users")
                .doc(uid)
                .get()
                .then((snapshot) => {
                    if (snapshot.exists) {
                        let user = snapshot.data();
                        user.uid = snapshot.id;

                        dispatch({ type: USERS_DATA_STATE_CHANGE, user });
                    }
                })
            if (getPosts) {
                dispatch(fetchUsersFollowingPosts(uid));
            }
        }
    })
}

export function fetchUsersFollowingPosts(uid) {
    return ((dispatch, getState) => {
        firebase.firestore()
            .collection("posts")
            .doc(uid)
            .collection("userPosts")
            .orderBy("creation", "asc")
            .get()
            .then((snapshot) => {
                const uid = snapshot.docs[0].ref.path.split('/')[1];
                const user = getState().usersState.users.find(el => el.uid === uid);


                let posts = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data, user }
                })

                for (let i = 0; i < posts.length; i++) {
                    dispatch(fetchUsersFollowingLikes(uid, posts[i].id))
                }
                dispatch({ type: USERS_POSTS_STATE_CHANGE, posts, uid })

            })
    })
}

export function fetchUsersFollowingLikes(uid, postId) {
    return ((dispatch, getState) => {
        let listener = firebase.firestore()
            .collection("posts")
            .doc(uid)
            .collection("userPosts")
            .doc(postId)
            .collection("likes")
            .doc(firebase.auth().currentUser.uid)
            .onSnapshot((snapshot) => {
                const postId = snapshot.id;

                let currentUserLike = false;
                if (snapshot.exists) {
                    currentUserLike = true;
                }

                dispatch({ type: USERS_LIKES_STATE_CHANGE, postId, currentUserLike })
            })
        unsubscribe.push(listener)
    })
}



export function queryUsersByUsername(username) {
    return ((dispatch, getState) => {
        return new Promise((resolve, reject) => {
            if (username.length == 0) {
                resolve([])
            }
            firebase.firestore()
                .collection('users')
                .where('username', '>=', username)
                .limit(10)
                .get()
                .then((snapshot) => {
                    let users = snapshot.docs.map(doc => {
                        const data = doc.data();
                        const id = doc.id;
                        return { id, ...data }
                    });
                    resolve(users);
                })
        })
    })
}


export function deletePost(item) {
    return ((dispatch, getState) => {
        return new Promise((resolve, reject) => {
            firebase.firestore()
                .collection('posts')
                .doc(firebase.auth().currentUser.uid)
                .collection("userPosts")
                .doc(item.id)
                .delete()
                .then(() => {
                    resolve();
                }).catch(() => {
                    reject();
                })
        })
    })
}







