import React from 'react';
import { useState } from 'react'
import * as firebase from "firebase/app";
import "firebase/auth";
import config from "./FirebaseAuth";
import Axios from 'axios';

const Login = () => {


  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  const firebaseAppAuth = firebase.auth();

  const provider = {
    googleProviders: new firebase.auth.GoogleAuthProvider()
  };
  const signInWithPopup = () => {
    firebase.auth().signInWithPopup(provider.googleProviders).then((result) => {
      console.log(result)
      putUserOnServer(result)
      var token = result.credential.accessToken;
    })
  }


  const putUserOnServer = async (result) => {
    const resp = await Axios.post('https://localhost:5001/api/PlayerStat', {
      ProperName: result.user.displayName,
      Email: result.user.email
    })
  }

  return (
    <div>
      <button onClick={() => signInWithPopup()} type=""> Sign in </button>

    </div>
  );
}

export default Login
