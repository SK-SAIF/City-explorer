import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';


const SignUp = () => {

    const [userUpdate, setUserUpdate] = useContext(UserContext);
    const history2=useHistory();
    const locations=useLocation();
    let { from } = locations.state || { from: { pathname: "/" } };


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
        if (user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    let newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.name);
                    setUserUpdate(newUserInfo);
                    history2.replace(from);
                })
                .catch((error) => {
                    let newUserInfo = { ...user };
                    newUserInfo.success = false;
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
                    setUserUpdate(newUserInfo);
                });
        }
        e.preventDefault();
    }

    const updateUserName = updateName => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: updateName

        }).then(function () {
            console.log("User updated successfully",user);
            
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
                <input type="password" name="password" id="" placeholder="Your Password" onBlur={handleChange} required />
                <br />
                <input type="password" name="confirmedPassword" id="" placeholder="Confirm Password" onBlur={handleChange}/>
                <br />
                <input type="submit" value="Sign Up" />
                <Link to="/Login" onClickCapture={() => setUserUpdate(userUpdate)}>Already have an account</Link>
            </form>

        </div>
    );
};

export default SignUp;