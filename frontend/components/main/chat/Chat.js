import { FontAwesome5 } from '@expo/vector-icons';
import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CachedImage from 'react-native-expo-cached-image';
import { Provider } from 'react-native-paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFeedPosts, fetchUserChats, sendNotification } from '../../../redux/actions/index';
import { container, text, utils } from '../../styles';
import { timeDifference } from '../../utils';
require('firebase/firestore')


function Chat(props) {
    const [user, setUser] = useState(null)
    const [chat, setChat] = useState(null)
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState("")
    const [textInput, setTextInput] = useState(null)
    const [flatList, setFlatList] = useState(null)
    const [initialFetch, setInitialFetch] = useState(false)

    useEffect(() => {
        if (props.route.params.notification) {
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
        }
        else {
            setUser(props.route.params.user)
        }

    }, [props.route.params.notification, props.route.params.user])


    useEffect(() => {
        if (user == null) {
            return;
        }
        if (initialFetch) {
            return;
        }

        const chat = props.chats.find(el => el.users.includes(user.uid));
        setChat(chat)


        props.navigation.setOptions({
            headerTitle: () => (
                <View style={[container.horizontal, utils.alignItemsCenter, { overflow: 'hidden' }]}>
                    {
                        user.image == 'default' ?
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
                    <Text style={[text.bold, text.large, { flex: 1 }]} numberOfLines={1} ellipsizeMode='tail'>{props.route.params.user.username}</Text>
                </View>
            ),
        });
        if (chat !== undefined) {
            firebase.firestore()
                .collection("chats")
                .doc(chat.id)
                .collection("messages")
                .orderBy("creation", "asc")
                .onSnapshot((snapshot) => {

                    let messages = snapshot.docs.map(doc => {
                        const data = doc.data();
                        const id = doc.id;
                        return { id, ...data }
                    })
                    setMessages(messages)
                })

            firebase.firestore()
                .collection('chats')
                .doc(chat.id)
                .update({
                    [firebase.auth().currentUser.uid]: true,
                })
            setInitialFetch(true)

        } else {
            createChat()
        }
    }, [user, props.chats])

    const createChat = () => {
        firebase.firestore()
            .collection("chats")
            .add({
                users: [firebase.auth().currentUser.uid, user.uid],
                lastMessage: 'Send the first message',
                lastMessageTimestamp: firebase.firestore.FieldValue.serverTimestamp()
            }).then(() => {
                props.fetchUserChats()
            })
    }
    const onSend = () => {
        const textToSend = input;
        if (chat == undefined) {
            return;
        }

        if (input.length == 0) {
            return;
        }
        setInput("")


        textInput.clear()

        firebase.firestore()
            .collection('chats')
            .doc(chat.id)
            .collection('messages')
            .add({
                creator: firebase.auth().currentUser.uid,
                text: textToSend,
                creation: firebase.firestore.FieldValue.serverTimestamp()
            })

        firebase.firestore()
            .collection('chats')
            .doc(chat.id)
            .update({
                lastMessage: textToSend,
                lastMessageTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
                [chat.users[0]]: false,
                [chat.users[1]]: false

            })

        props.sendNotification(user.notificationToken, "New Message", textToSend, { type: "chat", user: firebase.auth().currentUser.uid })


    }

    return (
        <View style={[container.container, container.alignItemsCenter, utils.backgroundWhite]}>
            <Provider>

                <FlatList
                    numColumns={1}
                    horizontal={false}
                    data={messages}
                    ref={setFlatList}
                    onContentSizeChange={() => { if (flatList != null) flatList.scrollToEnd({ animated: true }) }}

                    renderItem={({ item }) => (
                        <View style={[utils.padding10, container.container, item.creator == firebase.auth().currentUser.uid ? container.chatRight : container.chatLeft]}>
                            {item.creator !== undefined && item.creation !== null ?
                                <View style={container.horizontal}>
                                    <View>
                                        <Text style={[utils.margin5Bottom, text.white]}>
                                            {item.text}
                                        </Text>
                                        {item.post != null ?

                                            <TouchableOpacity style={{ marginBottom: 20, marginTop: 10 }} onPress={() => { props.navigation.navigate("Post", { item: item.post, user: item.post.user }) }}>
                                                {item.post.type == 0 ?
                                                    <CachedImage
                                                        cacheKey={item.id}
                                                        style={{ aspectRatio: 1 / 1, width: 200 }}
                                                        source={{ uri: item.post.downloadURLStill }}
                                                    />
                                                    :

                                                    <CachedImage
                                                        cacheKey={item.id}
                                                        style={{ aspectRatio: 1 / 1, width: 200 }}
                                                        source={{ uri: item.post.downloadURL }}
                                                    />
                                                }
                                            </TouchableOpacity>
                                            : null}
                                        <Text
                                            style={[text.grey, text.small, utils.margin5Bottom, text.whitesmoke]}>
                                            {timeDifference(new Date(), item.creation.toDate())}
                                        </Text>
                                    </View>
                                </View>
                                : null}


                        </View>
                    )
                    }
                />


                < View style={[container.horizontal, utils.padding10, utils.alignItemsCenter, utils.backgroundWhite, utils.borderTopGray]} >
                    {
                        props.currentUser.image == 'default' ?
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
                                        uri: props.currentUser.image
                                    }}
                                />
                            )
                    }


                    <View style={[container.horizontal, utils.justifyCenter, utils.alignItemsCenter]}>
                        < TextInput
                            ref={input => { setTextInput(input) }}
                            value={input}
                            multiline={true}
                            style={[container.fillHorizontal, container.input, container.container]}
                            placeholder='message...'
                            onChangeText={(input) => setInput(input)} />

                        < TouchableOpacity
                            onPress={() => onSend()}
                            style={{ width: 100, alignSelf: 'center' }}>
                            <Text style={[text.bold, text.medium, text.deepskyblue]} >Send</Text>
                        </TouchableOpacity >
                    </View>
                </View >
            </Provider>

        </View >

    )
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    chats: store.userState.chats,
    following: store.userState.following,
    feed: store.usersState.feed,

})
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUserChats, sendNotification, fetchFeedPosts }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Chat);
