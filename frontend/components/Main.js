import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import * as Notifications from 'expo-notifications';
import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reload } from '../redux/actions/index';
import CameraScreen from './main/add/Camera';
import ChatListScreen from './main/chat/List';
import FeedScreen from './main/post/Feed';
import ProfileScreen from './main/profile/Profile';
import SearchScreen from './main/profile/Search';


const Tab = createMaterialBottomTabNavigator();

function Main(props) {
    const [unreadChats, setUnreadChats] = useState(false)
    const [lastNot, setLastNot] = useState(false)

    const lastNotificationResponse = Notifications.useLastNotificationResponse();


    if (lastNotificationResponse != null && lastNotificationResponse != lastNot) {
        setLastNot(lastNotificationResponse)
        switch (lastNotificationResponse.notification.request.content.data.type) {
            case 0:
                props.navigation.navigate("Post", { item: lastNotificationResponse.notification.request.content.data.postId, user: lastNotificationResponse.notification.request.content.data.user, notification: true })
                break;
            case 1:
                props.navigation.navigate("Chat", { user: lastNotificationResponse.notification.request.content.data.user, notification: true })
                break;
            case 2:
                props.navigation.navigate("ProfileOther", { uid: lastNotificationResponse.notification.request.content.data.user, username: undefined, notification: true })
                break;
        }
    }
    useEffect(() => {
        props.reload();
        Notifications.addNotificationResponseReceivedListener((notification) => {
            switch (notification.notification.request.content.data.type) {
                case "post":
                    props.navigation.navigate("Post", { item: notification.notification.request.content.data.postId, user: notification.notification.request.content.data.user, notification: true })
                    break;
                case "chat":
                    props.navigation.navigate("Chat", { user: notification.notification.request.content.data.user, notification: true })
                    break;
                case "profile":
                    props.navigation.navigate("ProfileOther", { uid: notification.notification.request.content.data.user, username: undefined, notification: true })
                    break;
            }
        });


    }, [])

    useEffect(() => {
        if (props.currentUser != null) {
            if (props.currentUser.banned) {
                props.navigation.navigate("Blocked")
            }
        }
        setUnreadChats(false)
        for (let i = 0; i < props.chats.length; i++) {
            if (!props.chats[i][firebase.auth().currentUser.uid]) {

                setUnreadChats(true)
            }
        }
    }, [props.currentUser, props.chats])

    if (props.currentUser == null) {
        return (<View></View>)
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Tab.Navigator initialRouteName="Feed"

                labeled={false}
                tabBarOptions={{
                    showIcon: true, showLabel: false, indicatorStyle: {
                        opacity: 0
                    }
                }}
                barStyle={{ backgroundColor: '#ffffff' }}>
                <Tab.Screen key={Date.now()} name="Feed" component={FeedScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }} />
                <Tab.Screen key={Date.now()} name="Search" component={SearchScreen} navigation={props.navigation}
                    options={{
                        tabBarLabel: 'Seach',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="magnify" color={color} size={26} />
                        ),
                    }} />
                <Tab.Screen key={Date.now()} name="Camera" component={CameraScreen} navigation={props.navigation}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="camera" color={color} size={26} />
                        ),
                    }} />
                <Tab.Screen key={Date.now()} name="chat" component={ChatListScreen} navigation={props.navigation} share={false}
                    options={{
                        tabBarIcon: ({ color, size }) => (

                            <View>

                                {unreadChats ?
                                    <View style={{ backgroundColor: 'red', width: 10, height: 10, position: 'absolute', right: 0, borderRadius: 100 }}></View>

                                    :
                                    null
                                }
                                <View />

                                <MaterialCommunityIcons name="chat" color={color} size={26} />
                            </View>
                        ),
                    }} />
                <Tab.Screen name="Profile" component={ProfileScreen} navigation={props.navigation}
                    listeners={({ navigation }) => ({
                        tabPress: event => {
                            event.preventDefault();
                            navigation.navigate("Profile", { uid: firebase.auth().currentUser.uid })
                        }
                    })}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                        ),
                    }} />
            </Tab.Navigator>
        </View>

    )
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    chats: store.userState.chats,
    friendsRequestsReceived: store.userState.friendsRequestsReceived,
})
const mapDispatchProps = (dispatch) => bindActionCreators({ reload }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);
