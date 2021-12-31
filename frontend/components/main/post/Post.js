import { Entypo, Feather, FontAwesome5 } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player';
import firebase from 'firebase';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import BottomSheet from 'react-native-bottomsheet-reanimated';
import { Divider, Snackbar } from 'react-native-paper';
import ParsedText from 'react-native-parsed-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deletePost, fetchUserPosts, sendNotification } from '../../../redux/actions/index';
import { container, text, utils } from '../../styles';
import { timeDifference } from '../../utils';
import CachedImage from '../random/CachedImage';
require('firebase/firestore')



const WINDOW_WIDTH = Dimensions.get("window").width;

function Post(props) {
    const [item, setItem] = useState(props.route.params.item)
    const [user, setUser] = useState(props.route.params.user)
    const [currentUserLike, setCurrentUserLike] = useState(false)
    const [unmutted, setUnmutted] = useState(true)
    const [videoref, setvideoref] = useState(null)
    const [sheetRef, setSheetRef] = useState(useRef(null))
    const [modalShow, setModalShow] = useState({ visible: false, item: null })
    const [isValid, setIsValid] = useState(true);
    const [exists, setExists] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const isFocused = useIsFocused();
    useEffect(() => {

        if (props.route.params.notification != undefined) {

            firebase.firestore()
                .collection("users")
                .doc(props.route.params.user)
                .get()
                .then((snapshot) => {
                    if (snapshot.exists) {
                        let user = snapshot.data();
                        user.uid = snapshot.id;

                        setUser(user)
                    }
                })

            firebase.firestore()
                .collection("posts")
                .doc(props.route.params.user)
                .collection("userPosts")
                .doc(props.route.params.item)
                .get()
                .then((snapshot) => {
                    if (snapshot.exists) {
                        let post = snapshot.data();
                        post.id = snapshot.id;

                        setItem(post)
                        setLoaded(true)
                        setExists(true)
                    }
                })
            firebase.firestore()
                .collection("posts")
                .doc(props.route.params.user)
                .collection("userPosts")
                .doc(props.route.params.item)
                .collection("likes")
                .doc(firebase.auth().currentUser.uid)
                .onSnapshot((snapshot) => {
                    let currentUserLike = false;
                    if (snapshot.exists) {
                        currentUserLike = true;
                    }
                    setCurrentUserLike(currentUserLike)

                })

        }
        else {
            firebase.firestore()
                .collection("posts")
                .doc(props.route.params.user.uid)
                .collection("userPosts")
                .doc(props.route.params.item.id)
                .collection("likes")
                .doc(firebase.auth().currentUser.uid)
                .onSnapshot((snapshot) => {
                    let currentUserLike = false;
                    if (snapshot.exists) {
                        currentUserLike = true;
                    }
                    setCurrentUserLike(currentUserLike)

                })

            setItem(props.route.params.item)
            setUser(props.route.params.user)
            setLoaded(true)
            setExists(true)
        }

    }, [props.route.params.notification, props.route.params.item])

    useEffect(() => {
        if (videoref !== null) {
            videoref.setIsMutedAsync(props.route.params.unmutted)
        }
        setUnmutted(props.route.params.unmutted)
    }, [props.route.params.unmutted])

    useEffect(() => {
        if (videoref !== null) {
            if (isFocused) {
                videoref.playAsync()
            } else {
                videoref.stopAsync()

            }
        }

    }, [props.route.params.index, props.route.params.inViewPort])

    const onUsernamePress = (username, matchIndex) => {
        props.navigation.navigate("ProfileOther", { username, uid: undefined })
    }

    const onLikePress = (userId, postId, item) => {
        item.likesCount += 1;
        setCurrentUserLike(true)
        firebase.firestore()
            .collection("posts")
            .doc(userId)
            .collection("userPosts")
            .doc(postId)
            .collection("likes")
            .doc(firebase.auth().currentUser.uid)
            .set({})
            .then()
        props.sendNotification(user.notificationToken, "New Like", `${props.currentUser.name} liked your post`, { type: 0, postId, user: firebase.auth().currentUser.uid })

    }
    const onDislikePress = (userId, postId, item) => {
        item.likesCount -= 1;

        setCurrentUserLike(false)
        firebase.firestore()
            .collection("posts")
            .doc(userId)
            .collection("userPosts")
            .doc(postId)
            .collection("likes")
            .doc(firebase.auth().currentUser.uid)
            .delete()
    }
    if (!exists && loaded) {
        return (
            <View style={{ height: '100%', justifyContent: 'center', margin: 'auto' }}>
                <FontAwesome5 style={{ alignSelf: 'center', marginBottom: 20 }} name="dizzy" size={40} color="black" />
                <Text style={[text.notAvailable]}>Post does not exist</Text>
            </View>
        )
    }
    if (!loaded) {
        return (<View></View>)

    }
    if (user == undefined) {
        return (<View></View>)
    }
    if (item == null) {
        return (<View />)
    }

    const _handleVideoRef = (component) => {
        setvideoref(component);

        if (component !== null) {
            component.setIsMutedAsync(props.route.params.unmutted)
        }
    }

    if (videoref !== null) {
        videoref.setIsMutedAsync(unmutted)
        if (isFocused && props.route.params.index == props.route.params.inViewPort) {
            videoref.playAsync()
        } else {
            videoref.stopAsync()

        }
    }


    if (sheetRef.current !== null && !props.route.params.feed) {
        if (modalShow.visible) {
            sheetRef.snapTo(0)
        } else {
            sheetRef.snapTo(1)
        }
    }

    return (
        <View style={[container.container, utils.backgroundWhite]}>

            <View>
                <View style={[container.horizontal, { alignItems: 'center', padding: 10 }]}>
                    <TouchableOpacity
                        style={[container.horizontal, { alignItems: 'center' }]}
                        onPress={() => props.navigation.navigate("ProfileOther", { uid: user.uid, username: undefined })}>

                        {user.image == 'default' ?
                            (
                                <FontAwesome5
                                    style={[utils.profileImageSmall]}
                                    name="user-circle" size={35} color="black" />

                            )
                            :
                            (
                                <Image
                                    style={[utils.profileImageSmall]}
                                    source={{
                                        uri: user.image
                                    }}
                                />
                            )
                        }
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={[text.bold, text.medium, { marginBottom: 0 }]} >{user.name}</Text>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[{ marginLeft: 'auto' }]}

                        onPress={() => {
                            if (props.route.params.feed) {
                                props.route.params.setModalShow({ visible: true, item })
                            } else {
                                setModalShow({ visible: true, item })
                            }
                        }}>
                        <Feather
                            name="more-vertical" size={20} color="black" />
                    </TouchableOpacity>
                </View>
                {item.type == 0 ?
                    <View>
                        {props.route.params.index == props.route.params.inViewPort && isFocused ?
                            <View>
                                <VideoPlayer
                                    videoProps={{
                                        isLooping: true,
                                        shouldPlay: true,
                                        resizeMode: Video.RESIZE_MODE_COVER,
                                        source: {
                                            uri: item.downloadURL,
                                        },
                                        videoRef: _handleVideoRef,
                                    }}
                                    inFullscreen={false}
                                    showControlsOnLoad={true}
                                    showFullscreenButton={false}
                                    height={WINDOW_WIDTH}
                                    width={WINDOW_WIDTH}
                                    shouldPlay={true}
                                    isLooping={true}
                                    style={{
                                        aspectRatio: 1 / 1, height: WINDOW_WIDTH,
                                        width: WINDOW_WIDTH, backgroundColor: 'black'
                                    }}
                                />

                                <TouchableOpacity
                                    style={{ position: 'absolute', borderRadius: 500, backgroundColor: 'black', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', margin: 10, right: 0 }}
                                    activeOpacity={1}
                                    onPress={() => {
                                        if (videoref == null) {
                                            return;
                                        }
                                        if (unmutted) {
                                            if (props.route.params.setUnmuttedMain == undefined) {
                                                setUnmutted(false)
                                            } else {
                                                props.route.params.setUnmuttedMain(false)

                                            }

                                        } else {
                                            if (props.route.params.setUnmuttedMain == undefined) {
                                                setUnmutted(true)
                                            } else {
                                                props.route.params.setUnmuttedMain(true)

                                            }

                                        }

                                    }}>
                                    {!unmutted ?

                                        <Feather name="volume-2" size={20} color="white" />
                                        :
                                        <Feather name="volume-x" size={20} color="white" />
                                    }
                                </TouchableOpacity>

                            </View>

                            :
                            <View style={{ marginTop: 4 }}>

                                <CachedImage
                                    cacheKey={item.id}
                                    style={[container.image]}
                                    source={{ uri: item.downloadURLStill }}
                                />
                            </View>
                        }

                    </View>

                    :

                    <CachedImage
                        cacheKey={item.id}
                        style={container.image}
                        source={{ uri: item.downloadURL }}
                    />
                }

                <View style={[utils.padding10, container.horizontal]}>
                    {currentUserLike ?
                        (
                            <Entypo name="heart" size={30} color="red" onPress={() => onDislikePress(user.uid, item.id, item)} />
                        )
                        :
                        (
                            <Feather name="heart" size={30} color="black" onPress={() => onLikePress(user.uid, item.id, item)} />

                        )
                    }
                    <Feather style={utils.margin15Left} name="message-square" size={30} color="black" onPress={() => props.navigation.navigate('Comment', { postId: item.id, uid: user.uid, user })} />
                    <Feather style={utils.margin15Left} name="share" size={26} color="black" onPress={() => props.navigation.navigate('ChatList', { postId: item.id, post: { ...item, user: user }, share: true })} />


                </View>
                <View style={[container.container, utils.padding10Sides]}>
                    <Text style={[text.bold, text.medium]}>
                        {item.likesCount} likes
                    </Text>
                    <Text style={[utils.margin15Right, utils.margin5Bottom]}>
                        <Text style={[text.bold]}
                            onPress={() => props.navigation.navigate("ProfileOther", { uid: user.uid, username: undefined })}>
                            {user.name}
                        </Text>

                        <Text>    </Text>
                        <ParsedText
                            parse={
                                [
                                    { pattern: /@(\w+)/, style: { color: 'green', fontWeight: 'bold' }, onPress: onUsernamePress },
                                ]
                            }
                        >{item.caption}</ParsedText>

                    </Text>
                    <Text
                        style={[text.grey, utils.margin5Bottom]} onPress={() => props.navigation.navigate('Comment', { postId: item.id, uid: user.uid, user })}>
                        View all {item.commentsCount} Comments
                    </Text>
                    <Text
                        style={[text.grey, text.small, utils.margin5Bottom]}>
                        {timeDifference(new Date(), item.creation.toDate())}
                    </Text>
                </View>
            </View>

            <BottomSheet
                bottomSheerColor="#FFFFFF"
                ref={setSheetRef}
                initialPosition={0} //200, 300
                snapPoints={[300, 0]}
                isBackDrop={true}
                isBackDropDismissByPress={true}
                isRoundBorderWithTipHeader={true}
                backDropColor="black"
                isModal
                containerStyle={{ backgroundColor: "white" }}
                tipStyle={{ backgroundColor: "white" }}
                headerStyle={{ backgroundColor: "white", flex: 1 }}
                bodyStyle={{ backgroundColor: "white", flex: 1, borderRadius: 20 }}
                body={

                    <View>

                        {modalShow.item != null ?
                            <View>
                                <TouchableOpacity style={{ padding: 20 }}
                                    onPress={() => {
                                        props.navigation.navigate("ProfileOther", { uid: modalShow.item.user.uid, username: undefined });
                                        setModalShow({ visible: false, item: null });
                                    }}>
                                    <Text >Profile</Text>
                                </TouchableOpacity>
                                <Divider />
                                {props.route.params.user.uid == firebase.auth().currentUser.uid ?
                                    <TouchableOpacity style={{ padding: 20 }}
                                        onPress={() => {
                                            props.deletePost(modalShow.item).then(() => {
                                                props.fetchUserPosts()
                                                props.navigation.popToTop()
                                            })
                                            setModalShow({ visible: false, item: null });
                                        }}>
                                        <Text >Delete</Text>
                                    </TouchableOpacity>
                                    : null}

                                <Divider />
                                <TouchableOpacity style={{ padding: 20 }} onPress={() => setModalShow({ visible: false, item: null })}>
                                    <Text >Cancel</Text>
                                </TouchableOpacity>
                            </View>
                            : null}

                    </View>
                }
            />
            <Snackbar
                visible={isValid.boolSnack}
                duration={2000}
                onDismiss={() => { setIsValid({ boolSnack: false }) }}>
                {isValid.message}
            </Snackbar>
        </View>
    )
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    following: store.userState.following,
    feed: store.usersState.feed,
    usersFollowingLoaded: store.usersState.usersFollowingLoaded,
})

const mapDispatchProps = (dispatch) => bindActionCreators({ sendNotification, fetchUserPosts, deletePost }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Post);
