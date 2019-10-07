import React from 'react';
import { useState } from 'react'
import * as firebase from "firebase/app";
import "firebase/auth";
import config from "./FirebaseAuth";
import Axios from 'axios';

const Login = () => {
  const [userData, setUserData] = useState(result)


  firebase.initializeApp(config);
  const firebaseAppAuth = firebase.auth();

  const provider = {
    googleProviders: new firebase.auth.GoogleAuthProvider()
  };
  const signInWithPopup = () => {
    firebase.auth().signInWithPopup(provider.googleProviders).then((result) => {
      console.log(result)
      var token = result.credential.accessToken;
    })
  }

  const putUserOnServer = async () => {
    const resp = await Axios.post('https://localhost:5001/api/PlayerStat', {
      ProperName: userData.displayName,
      Email: userData.email
    })
  }

  return (
    <div>
      <button onClick={() => signInWithPopup(), putUserOnServer()} type="">
        Sign in
      </button>
    </div>
  );
}

export default Login
