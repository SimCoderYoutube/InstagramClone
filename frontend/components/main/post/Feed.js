import firebase from 'firebase'
import React, { useEffect, useRef, useState } from 'react'
import { FlatList, RefreshControl, Text, View } from 'react-native'
import BottomSheet from 'react-native-bottomsheet-reanimated'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Divider, Snackbar } from 'react-native-paper'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deletePost, fetchFeedPosts, reload, sendNotification } from '../../../redux/actions/index'
import { container, utils } from '../../styles'
import Post from './Post'
require('firebase/firestore')

function Feed(props) {
    const [posts, setPosts] = useState([]);
    const [refreshing, setRefreshing] = useState(false)
    const [unmutted, setUnmutted] = useState(null)
    const [inViewPort, setInViewPort] = useState(0)
    const [sheetRef, setSheetRef] = useState(useRef(null))
    const [modalShow, setModalShow] = useState({ visible: false, item: null })
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        if (props.usersFollowingLoaded == props.following.length && props.following.length !== 0) {
            props.feed.sort(function (x, y) {
                return y.creation.toDate() - x.creation.toDate();
            })

            setPosts(props.feed);
            setRefreshing(false)
            for (let i = 0; i < props.feed.length; i++) {
                if (props.feed[i].type == 0) {
                    setUnmutted(i)
                    return;
                }
            }
        }
        props.navigation.setParams({ param: "value" })

    }, [props.usersFollowingLoaded, props.feed])

    const onViewableItemsChanged = useRef(({ viewableItems, changed }) => {
        if (changed && changed.length > 0) {
            setInViewPort(changed[0].index);
        }
    })




    if (posts.length == 0) {
        return (<View />)
    }

    if (sheetRef.current !== null) {
        if (modalShow.visible) {
            sheetRef.snapTo(0)
        } else {
            sheetRef.snapTo(1)
        }
    }
    return (
        <View style={[container.container, utils.backgroundWhite]}>

            <FlatList
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={() => {
                            setRefreshing(true);
                            props.reload()
                        }}
                    />
                }
                onViewableItemsChanged={onViewableItemsChanged.current}
                viewabilityConfig={{
                    waitForInteraction: false,
                    viewAreaCoveragePercentThreshold: 70
                }}
                numColumns={1}
                horizontal={false}
                data={posts}
                keyExtractor={(item, index) => index.toString()}

                renderItem={({ item, index }) => (
                    <View key={index}>
                        <Post route={{ params: { user: item.user, item, index, unmutted, inViewPort, setUnmuttedMain: setUnmutted, setModalShow, feed: true } }} navigation={props.navigation} />
                    </View>
                )}
            />

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
                                {modalShow.item.creator == firebase.auth().currentUser.uid ?
                                    <TouchableOpacity style={{ padding: 20 }}
                                        onPress={() => {
                                            props.deletePost(modalShow.item).then(() => {
                                                setRefreshing(true);
                                                props.reload()
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

const mapDispatchProps = (dispatch) => bindActionCreators({ reload, sendNotification, fetchFeedPosts, deletePost }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Feed);
