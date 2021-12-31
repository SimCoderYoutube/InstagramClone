import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Paper, Avatar, Divider, CircularProgress, Button, TextField } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';

export default function User(props) {
    const [user, setUser] = useState([])
    const [banReason, setBanReason] = useState('')
    const location = useLocation();
    const [posts, setPosts] = useState([])
    useEffect(() => {
        firebase.firestore()
            .collection("posts")
            .doc(props.match.params.id)
            .collection("userPosts")
            .onSnapshot((snapshot) => {
                let result = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                })
                setPosts(result)
            })
    }, [])
    useEffect(() => {
        firebase.firestore()
            .collection("users")
            .doc(props.match.params.id)
            .onSnapshot((snapshot) => {
                if (snapshot.exists) {
                    let user = snapshot.data();
                    user.uid = snapshot.id;

                    setUser(user);
                }
            })
    }, [])

    const banUser = () => {
        firebase.firestore()
            .collection("users")
            .doc(props.match.params.id)
            .update({
                banned: true,
                banDetails: {
                    banReason: banReason.target.value,
                    date: firebase.firestore.FieldValue.serverTimestamp()
                }
            })
    }
    const unbanUser = () => {
        firebase.firestore()
            .collection("users")
            .doc(props.match.params.id)
            .update({
                banned: false,
                banDetails: {}
            })
    }
    const history = useHistory();
    const columns = [
        { field: 'caption', headerName: 'caption', width: 400 },

        { field: 'likesCount', headerName: 'likesCount', width: 130 },
        { field: 'commentsCount', headerName: 'commentsCount', width: 130 },
        {
            field: 'creation', headerName: 'creation', width: 200,
            valueGetter: (params) =>
                `${new Date(params.value.seconds * 1000)}`
        },
        {
            field: 'link', headerName: 'Detail', width: 150,
            renderCell: (params) => (
                <div>
                    <Button variant="contained" color="primary" onClick={() => { history.push({ pathname: `/post/${params.row.id}/${props.match.params.id}` }) }}>
                        View
                        </Button>
                </div>
            ),

        },
    ];

    if (user.length == 0) {
        return (
            <CircularProgress
                variant="indeterminate"
                size={40}
                thickness={4}
                value={100}
            />
        )
    }
    return (
        <div className=" row m-5">

            <Paper className="col-md-3 m-3" elevation={5}>
                <div style={{ alignItems: 'center' }} className="p-5 ">
                    <Avatar style={{ height: '200px', width: '200px' }} className="m-auto mb-4" alt="Travis Howard" src={user.image} />
                    <h3 style={{ textAlign: 'center' }} className="mt-4">{user.name}</h3>
                    <h6 style={{ textAlign: 'center' }}>{user.username}</h6>
                </div>
            </Paper>


            <Paper className="col-md-8 m-3" elevation={5}>
                <div style={{ alignItems: 'center' }} className="p-5 ">

                    <p style={{ textAlign: 'left', fontWeight: 'bold' }}>email</p>
                    <p style={{ textAlign: 'left' }}>{user.email}</p>


                    <Divider className="mb-3" />
                </div>
            </Paper>

            <Paper className="col-md-3 m-3 p-5" elevation={5}>
                {!user.banned ?
                    <div>
                        <TextField
                            className="col-md-12"
                            id="outlined-required"
                            label="Ban Reason"
                            defaultValue=""
                            multiline={true}
                            variant="outlined"
                            inputMode="numeric"
                            onChange={setBanReason}
                        />

                        <Button className="col-md-12 mt-5" variant="contained" color="secondary" onClick={() => banUser()}>Ban</Button>

                    </div>
                    :
                    <div>
                        <Button className="col-md-12 mt-5" variant="contained" color="secondary" onClick={() => unbanUser()}>Unban</Button>

                    </div>
                }
            </Paper>

            <Paper className="col-md-8 m-3 p-5" elevation={5} style={{height: 400}}>
                <DataGrid rows={posts} columns={columns} pageSize={5} columns={columns.map((column) => ({
                    ...column,
                    disableClickEventBubbling: true,
                }))} />
            </Paper>
        </div>
    )
}