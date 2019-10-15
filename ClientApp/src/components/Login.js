import React from 'react'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import config from './FirebaseAuth'
import Axios from 'axios'

const Login = () => {
  const [id, setId] = useState()
  const [names, setNames] = useState()
  const [userId, setUserId] = useState()

  if (!firebase.apps.length) {
    firebase.initializeApp(config)
  }
  const firebaseAppAuth = firebase.auth()

  const provider = {
    googleProviders: new firebase.auth.GoogleAuthProvider()
  }
  const signInWithPopup = () => {
    firebase
      .auth()
      .signInWithPopup(provider.googleProviders)
      .then(result => {
        console.log(result)
        putUserOnServer(result)
        var token = result.credential.accessToken
      })
  }

  const getAllUsers = async () => {
    const resp = await Axios.get('/api/Player')
    const y = resp.data.map(e => {
      // console.log(e.properName)
      // console.log(e.id)
      return e.properName
    })
    const x = resp.data.map(e => {
      return e.id
    })
    console.log(y)
    console.log(x)
    setNames(y)
    setUserId(x)
  }

  const putUserOnServer = async result => {
    const resp = await Axios.post('/api/Player', {
      ProperName: result.user.displayName,
      Email: result.user.email
    })
    setId(resp.data.id)
    console.log(resp.data.id)
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div className="text-center">
      {id ? (
        <Redirect to={`/Game/${id}`}></Redirect>
      ) : (
        <button onClick={() => signInWithPopup()} type="">
          Sign in
        </button>
      )}
    </div>
  )
}

export default Login
