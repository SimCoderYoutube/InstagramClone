import { FontAwesome5 } from '@expo/vector-icons';
import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsersData } from '../../../redux/actions/index';
import { container, text, utils } from '../../styles';
import { timeDifference } from '../../utils';
import CachedImage from '../random/CachedImage';

require('firebase/firestore')



function Chat(props) {
    const [chats, setChats] = useState([])
    const [reload, setReload] = useState(false)
    const [input, setInput] = useState("")
    const [caption, setCaption] = useState("")
    const [textInput, setTextInput] = useState(null)

    useEffect(() => {
        for (let i = 0; i < props.chats.length; i++) {
            if (props.chats[i].hasOwnProperty('otherUser')) {
                continue;
            }
            let otherUserId;
            if (props.chats[i].users[0] == firebase.auth().currentUser.uid) {
                otherUserId = props.chats[i].users[1];
            } else {
                otherUserId = props.chats[i].users[0];
            }

            const user = props.users.find(x => x.uid === otherUserId)
            if (user == undefined) {
                props.fetchUsersData(otherUserId, false)
            } else {
                props.chats[i].otherUser = user
            }
        }
        setChats(props.chats)
    }, [props.chats, props.users])



    const sendPost = (item) => {
        if (item.sent != undefined) {
            return;
        }
        const textToSend = input;

        setInput("")

        textInput.clear()

        let post = props.route.params.post
        delete post.doc
        firebase.firestore()
            .collection('chats')
            .doc(item.id)
            .collection('messages')
            .add({
                creator: firebase.auth().currentUser.uid,
                text: textToSend,
                post: post,
                creation: firebase.firestore.FieldValue.serverTimestamp()
            })
        firebase.firestore()
            .collection('chats')
            .doc(item.id)
            .update({
                lastMessage: "post sent",
                lastMessageTimestamp: firebase.firestore.FieldValue.serverTimestamp()
            })


        firebase.firestore()
            .collection('chats')
            .doc(item.id)
            .update({
                lastMessage: textToSend,
                lastMessageTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
                [item.users[0]]: false,
                [item.users[1]]: false
            })

        props.navigation.popToTop()

    }

    let share = false;
    let item = null;

    if (props.route.params !== undefined) {
        share = props.route.params.share
        item = props.route.params.post
    }


    if (chats.length === 0) {
        return (
            <View style={{ height: '100%', justifyContent: 'center', margin: 'auto' }}>
                <FontAwesome5 style={{ alignSelf: 'center', marginBottom: 20 }} name="comments" size={40} color="black" />
                <Text style={[text.notAvailable]}>No chats notAvailable</Text>
            </View>
        )
    }
    return (
        <View style={[container.container, container.alignItemsCenter, utils.backgroundWhite]}>
            {item != null ?
                <View style={{ flexDirection: 'row', padding: 20 }}>
                    <TextInput
                        style={[container.fillHorizontal, container.input, container.container]}
                        multiline={true}
                        ref={setTextInput}
                        placeholder="Write a message . . ."
                        onChangeText={(caption) => setInput(caption)}
                    />
                    {item.type == 1 ?
                        <Image
                            style={utils.profileImageSmall}
                            source={{ uri: props.route.params.post.downloadURL }}
                            style={{ aspectRatio: 1 / 1, backgroundColor: 'black', height: 80 }}
                        />
                        :

                        <CachedImage
                            cacheKey={item.id}
                            style={{ aspectRatio: 1 / 1, height: 80 }}
                            source={{ uri: props.route.params.post.downloadURLStill }}
                        />

                    }
                </View>
                : null}

            <Divider />
            {chats.length !== 0 ?
                <FlatList
                    numColumns={1}
                    horizontal={false}
                    data={chats}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) => (

                        <View style={!item[firebase.auth().currentUser.uid] ? { backgroundColor: '#d2eeff' } : null}>
                            {item.otherUser == null ? (
                                <FontAwesome5
                                    style={[utils.profileImageSmall]}
                                    name="user-circle" size={35} color="black" />
                            )
                                :
                                (
                                    <TouchableOpacity style={[utils.padding15, container.horizontal]}
                                        activeOpacity={share ? 1 : 0}
                                        onPress={() => {
                                            if (!share) {
                                                props.navigation.navigate("Chat", { user: item.otherUser })

                                            }
                                        }}>

                                        <View style={container.horizontal}>

                                            {item.otherUser.image == 'default' ? (
                                                <FontAwesome5
                                                    style={[utils.profileImageSmall]}
                                                    name="user-circle" size={35} color="black" />
                                            )
                                                :
                                                (
                                                    <Image
                                                        style={[utils.profileImageSmall]}
                                                        source={{
                                                            uri: item.otherUser.image
                                                        }} />
                                                )}


                                        </View>

                                        <View>
                                            <Text style={[text.bold]}>{item.otherUser.name}</Text>

                                            <Text numberOfLines={1} ellipsizeMode='tail' style={[utils.margin15Right, utils.margin5Bottom, { paddingBottom: 10 }]}>
                                                {item.lastMessage} {" "}
                                                {item.lastMessageTimestamp == null ? (

                                                    <Text style={[text.grey, text.small, utils.margin5Bottom]}>Now</Text>
                                                ) : (
                                                    <Text
                                                        style={[text.grey, text.small, utils.margin5Bottom]}>
                                                        {timeDifference(new Date(), item.lastMessageTimestamp.toDate())}
                                                    </Text>
                                                )}
                                            </Text>
                                        </View>

                                        {share ? <TouchableOpacity
                                            style={[utils.buttonOutlined, utils.margin15Right, { backgroundColor: '#0095ff', marginLeft: 'auto', justifyContent: 'center' }]}
                                            onPress={() => sendPost(item)}>
                                            <Text style={[text.bold, { color: 'white', textAlign: 'center', textAlignVertical: 'center' }]}>Send</Text>
                                        </TouchableOpacity> :
                                            null}



                                    </TouchableOpacity>
                                )}

                        </View>

                    )
                    }
                />

                :

                <View style={{ height: '100%', justifyContent: 'center', margin: 'auto' }}>
                    <FontAwesome5 style={{ alignSelf: 'center', marginBottom: 20 }} name="comments" size={40} color="black" />
                    <Text style={[text.notAvailable]}>No chats available</Text>
                </View>
            }
        </View >
    )
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    chats: store.userState.chats,
    users: store.usersState.users,
})
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUsersData }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Chat);
