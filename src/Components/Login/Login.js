import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { Link, Route } from 'react-router-dom';
import SignUp from '../SignUp/SignUp';
import { UserContext } from '../../App';



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const [newUser,setNewUser]=useContext(UserContext);
    
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                var user = result.user;
                console.log(user);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    return (
        <div>
            <h1>This is Login</h1>
            <form action="">
                <input type="text" name="" id="loginMail" required placeholder="Your Email" />
                <br />
                <input type="password" name="" id="loginPassword" required placeholder="Your Password" />
                <br />
                <button style={{color:"cyan"}}>Log in</button>
                <Link to="/SignUp" onClickCapture={() => setNewUser(!newUser)}>Already have an account</Link>
            </form>
            <button onClick={handleGoogleSignIn}>Sign in with Google</button>

        </div>
            
       


    );
};

export default Login;