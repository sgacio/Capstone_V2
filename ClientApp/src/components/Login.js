import React from 'react'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import config from './FirebaseAuth'
import Axios from 'axios'
import './styles.css'


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
    const resp = await Axios.get('https://localhost:5001/api/PlayerStat')
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
    const resp = await Axios.post('https://localhost:5001/api/PlayerStat', {
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
    <div>

      <section class="banner-area" id="home" >
        <div class="container">
          <div class="row fullscreen d-flex align-items-center justify-content-start">

            <div class="banner-content col-lg-7">

              <h6 class="text-white text-uppercase">Now you can feel the Energy</h6>
              <h1>
                Start your journey now, build your legacy.
							</h1>

            </div>

          </div>
          <div className="text-center">
            {id ? (
              <Redirect to={`/Game/${id}`}></Redirect>
            ) : (
                <button className="btn btn-secondary" onClick={() => signInWithPopup()} type="">
                  Sign in
        </button>
              )}
          </div>

        </div>

      </section>

    </div >
  )
}

export default Login
