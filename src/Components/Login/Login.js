import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { Link, Route, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [userUpdate, setUserUpdate] = useContext(UserContext);
    const [signedUser, setSignedUser] = useState({
        signedInPassword:'',
        signedInEmail:''
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
    const handleChangePass = (e) => {
        const userInput={...signedUser};
        userInput.signedInPassword=e.target.value;
        setSignedUser(userInput);
    }
    const handleChangeEmail=(e)=>{
        const userInput={...signedUser};
        userInput.signedInEmail=e.target.value;
        setSignedUser(userInput);
    }
    const handleLogIn = (e) => {
        if (signedUser.signedInPassword === userUpdate.password && signedUser.signedInEmail===userUpdate.email ) {
            firebase.auth().signInWithEmailAndPassword(userUpdate.email, userUpdate.password)
                .then((userCredential) => {
                    console.log("userCredential", userCredential);
                    setUserUpdate(userCredential.user);
                    history.replace(from);
                })
                .catch((error) => {
                    var errorMessage = error.message;
                    setUserUpdate(errorMessage);
                    console.log(errorMessage);
                });
            e.preventDefault();
            console.log("Logged in successfully");
        }
        else {
            console.log("Didn't match");
            const errorMessage="Failed";
        }

    };
    return (
        <div>
            <h1>Welcome to Login...!...</h1>
            <form onSubmit={handleLogIn}>
                <input type="text" name="email" defaultValue={userUpdate.email} onBlur={handleChangeEmail} id="loginMail" required placeholder="Your Email" />
                <br />
                <input type="password" name="password" id="loginPassword" onBlur={handleChangePass} required placeholder="Your Password" />
                <br />
                <input type="submit" value="Log In" />
                <Link to="/SignUp" onClickCapture={() => setUserUpdate(!userUpdate)}>Have no account?</Link>
                <br/>
                <hr/>
                <button style={{marginTop:"100px",backgroundColor:"cyan",color:"black"}} onClick={handleGoogleSignIn}>Sign in with Google</button>
            </form>
        </div>
    );
};
export default Login;