import React, { Component, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import firebase from 'firebase'
import login from './components/login'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';



function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        setLoggedIn(false);
      }
      else {
        setLoggedIn(true);
      }
    })
  }, [])

  if (loggedIn) {
    return (
      <Home></Home>
    )
  }
  return (
    <Router >
      <Route path="/" exact component={login} />
    </Router>
  )
}

export default App
