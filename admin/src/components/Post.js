import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Paper, Avatar, Divider, CircularProgress, Button, TextField } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';

import Chip from '@material-ui/core/Chip';
import { Clear, Check, PhotoSizeSelectLargeRounded, Markunread } from '@material-ui/icons';
import DoneIcon from '@material-ui/icons/Done';
import { useHistory } from "react-router-dom";
import { FaBeer } from 'react-icons/fa';

export default function Post(props) {
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])
    const [loaded, setLoaded] = useState(false)
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        firebase.firestore()
            .collection("posts")
            .doc(props.match.params.uid)
            .collection('userPosts')
            .doc(props.match.params.id)
            .onSnapshot((snapshot) => {
                if (snapshot.exists) {
                    let result = snapshot.data();
                    result.id = snapshot.id;
                    setPost(result);
                }
            })
    }, [])

    useEffect(() => {
        if (post == null) {
            return;
        }
        firebase.firestore()
            .collection("posts")
            .doc(props.match.params.uid)
            .collection("userPosts")
            .doc(props.match.params.id)
            .collection('comments')
            .onSnapshot((snapshot) => {
                let result = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                })
                setComments(result)
                setLoaded(true)
            })
    }, [post])

    const deleteComment = (id) => {
        firebase.firestore()
            .collection("posts")
            .doc(props.match.params.uid)
            .collection("userPosts")
            .doc(props.match.params.id)
            .collection('comments')
            .doc(id)
            .delete()
    }
    const deletePost = () => {
        firebase.firestore()
            .collection("posts")
            .doc(props.match.params.uid)
            .collection("userPosts")
            .doc(props.match.params.id)
            .delete()

        firebase.firestore()
            .collection("feed")
            .doc(post.id)
            .delete()
    }


    const columns = [
        { field: 'id', headerName: 'ID', width: 280 },
        { field: 'text', headerName: 'text', width: 400 },
        {
            field: 'delete', headerName: 'delete', width: 150,
            renderCell: (params) => (

                <div>
                    <Button variant="contained" color="secondary" onClick={() => { deleteComment(params.row.id) }}>
                        Delete
                    </Button>
                </div>

            ),

        },
        {
            field: 'user', headerName: 'user', width: 150,
            renderCell: (params) => (

                <div>
                    <Button variant="contained" color="primary" onClick={() => { history.push({ pathname: `/user/${params.row.creator}` }) }}>
                        View
                    </Button>
                </div>

            ),

        },
    ];

    if (!loaded) {
        return (
            <CircularProgress
                variant="indeterminate"
                size={40}
                thickness={4}
                value={100}
            />
        )
    }
    const date = new Date(post['creation'].seconds * 1000)
    return (
        <div className=" row m-5">
            <Paper className="col-md-8 m-3 p-5" elevation={5}>
                <div style={{ alignItems: 'center' }} className="pb-4">

                    <p style={{ textAlign: 'left', fontWeight: 'bold' }}>Caption</p>
                    <p style={{ textAlign: 'left' }}>{post.caption}</p>

                    <Divider className="mb-3" />
                    <p style={{ textAlign: 'left', fontWeight: 'bold' }}>Date</p>
                    <p>{date.toString()}</p>
                </div>

                <Button variant="contained" color="primary" className="mr-2 col-md-3" href={post.downloadURL} target="_blank">Open Media</Button>
                <Button variant="contained" color="secondary" onClick={() => { deletePost() }}>
                    Delete
                </Button>
            </Paper>


            <Paper className="m-3" style={{ height: 400, width: '100%', marginTop: '100px', backgroundColor: 'white' }} elevation={5}>
                <DataGrid rows={comments} columns={columns} pageSize={5} columns={columns.map((column) => ({
                    ...column,
                    disableClickEventBubbling: true,
                }))} />
            </Paper>
        </div>
    )
}
