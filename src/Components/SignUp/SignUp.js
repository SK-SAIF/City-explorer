import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


const SignUp = () => {

    const [newUser, setNewUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSignedIn: 'false',
        name: '',
        password: '',
        email: '',
        photo: '',
        error: '',
        success: false
    });


    const handleChange = (event) => {

        let isFormValid;
        if (event.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === 'password') {
            isFormValid = event.target.value.length > 6;
        }
        if (event.target.name === 'name') {
            isFormValid = event.target.value.length > 0;
        }
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }

    }

    const handleSignUp = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    let newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.name);
                })
                .catch((error) => {
                    let newUserInfo = { ...user };
                    newUserInfo.success = false;
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
                });
        }

        if (!newUser && user.email && user.password) {

            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    let newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    console.log(res.user);
                    history.replace(from);
                    
                })
                .catch((error) => {
                    let newUserInfo = { ...user };
                    newUserInfo.success = false;
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
                });
        }

        e.preventDefault();
    }

    const updateUserName = updateName => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: updateName

        }).then(function () {
            console.log("User updated successfully")
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div>
            <form onSubmit={handleSignUp}>
                <input type="text" name="name" id="" placeholder="Your Name" onBlur={handleChange} required />
                <br />
                <input type="text" name="email" id="" placeholder="Your Email" onBlur={handleChange} required />
                <br />
                <input type="text" name="password" id="" placeholder="Your Password" onBlur={handleChange} required />
                <br />
                <input type="text" name="confirmedPassword" id="" placeholder="Confirm Password" onBlur={handleChange} required />
                <br />
                <input type="submit" value="Sign Up" />
            </form>

        </div>
    );
};

export default SignUp;