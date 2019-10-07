import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import config from "./FirebaseAuth";



const Login = () => {
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

  return (
    <div>
      <button onClick={() => signInWithPopup()} type="">
        Sign in
      </button>
    </div>
  );
}

export default Login
