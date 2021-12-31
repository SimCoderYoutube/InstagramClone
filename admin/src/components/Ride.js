import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Paper, Avatar, Divider, CircularProgress, Button, TextField } from '@material-ui/core';

export default function Ride(props) {
    const [user, setUser] = useState(null)
    const [banReason, setBanReason] = useState('')
    const location = useLocation();

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
            .doc(firebase.auth().currentUser.uid)
            .update({
                banned: true,
                banDetails: {
                    banReason,
                    date: firebase.firestore.FieldValue.serverTimestamp()
                }
            })
    }
    if (user == null) {
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

                    <p style={{ textAlign: 'left', fontWeight: 'bold' }}>phone Number</p>
                    <p style={{ textAlign: 'left' }}>{user.phoneNumber}</p>

                    <Divider className="mb-3" />
                    <p style={{ textAlign: 'left', fontWeight: 'bold' }}>Birthday</p>
                    <p>{user.birthday}</p>

                    <Divider className="mb-3" />
                    <p style={{ textAlign: 'left', fontWeight: 'bold' }}>Last Login</p>
                    <p>{user.lastLogin}</p>

                    <Divider className="mb-3" />
                    <p style={{ textAlign: 'left', fontWeight: 'bold' }}>Phone Info</p>
                    <p>{user.device}</p>

                    <Divider className="mb-3" />
                    <p style={{ textAlign: 'left', fontWeight: 'bold' }}>Identification</p>
                    <Button variant="contained" color="primary" className="mr-2 col-md-3" href={user.identification.backIdImageURL} target="_blank">Back driver's license</Button>
                    <Button variant="contained" color="primary" className="mr-2 col-md-3" href={user.identification.backIdImageURL} target="_blank">Front driver's license</Button>
                    <Button variant="contained" color="primary" className="mr-2 col-md-3" href={user.identification.photo} target="_blank">Photo</Button>
                </div>
            </Paper>


            <Paper className="col-md-3 m-3 p-5" elevation={5}>
                <TextField
                    className="col-md-12"
                    id="outlined-required"
                    label="tokens"
                    defaultValue={user.tokens}
                    variant="outlined"
                    inputMode="numeric"
                />
                <Button className="col-md-12 mt-5" variant="contained" color="primary">save</Button>
            </Paper>

            <Paper className="col-md-3 m-3 p-5" elevation={5}>
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

            </Paper>

        </div>
    )
}
