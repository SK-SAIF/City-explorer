import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { Link, Route, useHistory, useLocation } from 'react-router-dom';
import SignUp from '../SignUp/SignUp';
import { UserContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const [userUpdate, setUserUpdate] = useContext(UserContext);
    const [signedUser, setSignedUser] = useState({
        signedInPassword: false,
    });
    const history=useHistory();
    const location=useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                console.log(result);
                setUserUpdate(result.user);
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }




    // const handleChangeMail = (event) => {
    //     if(event.target.value===userUpdate.email){
    //         const validMail =signedUser.signedInMail=true;
    //         setSignedUser(validMail);
    //     }
    //     else{
    //         console.log("Email didn't match");
    //     }
    //     console.log(signedUser);
    // }
    const handleChangePass = (e) => {
        if (e.target.value === userUpdate.password) {
            const validPass = signedUser.signedInPassword = true;
            setSignedUser(validPass);
        }
        else {
            console.log("Password didn't match");
        }
        console.log(signedUser);
    }

    const handleLogIn = (e) => {
        if (signedUser.signedInPassword === true) {
            firebase.auth().signInWithEmailAndPassword(userUpdate.email, userUpdate.password)
                .then((userCredential) => {
                    console.log("userCredential", userCredential);
                    history.replace(from);
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage);
                });
            e.preventDefault();
        }
        else {
            console.log("Your password didn't match");
        }

    };
    return (
        <div>
            <h1>Welcome to Login...!...</h1>
            <form onSubmit={handleLogIn}>
                <input type="text" name="email" defaultValue={userUpdate.email} id="loginMail" required placeholder="Your Email" />
                <br />
                <input type="password" name="password" id="loginPassword" onBlur={handleChangePass} required placeholder="Your Password" />
                <br />
                <input type="submit" value="Log In" />
                <Link to="/SignUp" onClickCapture={() => setUserUpdate(!userUpdate)}>Have no account?</Link>
            </form>
            <button onClick={handleGoogleSignIn}>Sign in with Google</button>

        </div>
    );
};

export default Login;