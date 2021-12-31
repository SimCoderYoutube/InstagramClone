
import React, { Component, useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import firebase from 'firebase'


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const onSignIn = () => {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        });
    }

    if (firebase.auth().currentUser == undefined) {
        return (

            <div className="container vertical-center ">
                <div className="auth-wrapper">
                    <div className="auth-inner">
                            <h3>Sign In</h3>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email"
                                    onChange={e => setEmail(e.target.value)}
                                    value={email} />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)} />
                            </div>

                            <button className="btn btn-primary btn-block" onClick={onSignIn}>Submit</button>

                    </div>
                </div>
            </div>
        )
    }
}
