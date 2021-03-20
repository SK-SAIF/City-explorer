import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import SignUp from './Components/SignUp/SignUp';
import { createContext, useState } from 'react';
import "./App.css";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Confirmation from './Components/Destination/Confirmation/Confirmation';

export const UserContext = createContext();


function App() {
  const [userUpdate, setUserUpdate] =useState(false);
  const navStyle={margin: "20px", padding: "20px",color:"cyan",fontSize:"20px",textDecoration:"none"}
  return (
    <UserContext.Provider value={[userUpdate, setUserUpdate]}>
      <div className="app">
        <h2 style={{color:"white"}}>Email of user:{userUpdate.email}</h2>
        <Router>
          <nav>
            <div className="nameBar">
              <a to=""><span style={{ color: "yellow", fontSize: "70px", fontWeight: "bold" }}>City Explorer</span></a>
            </div>

            <div className="navbar">
              <Link to="/Home" style={navStyle}>Home</Link>
              <Link to="/Destination" style={navStyle}>Destination</Link>
              <Link to="/Blog" style={navStyle}>Blog</Link>
              <Link to="/Contact" style={navStyle}>Contact</Link>
              <Link to="/Login" style={{ margin: "20px", padding: "20px",textDecoration:"none" }}><button>Login Or SignUp</button></Link>
            </div>
          </nav>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/Home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/Destination">
              <Destination></Destination>
            </PrivateRoute>
            <Route path="/Contact">
              <Contact></Contact>
            </Route>
            <Route path="/Blog">
              <Blog></Blog>
            </Route>
            <Route path="/Login">
              <Login></Login>
            </Route>
            <Route path="/SignUp">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/Confirmation">
              <Confirmation></Confirmation>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>

  );
}

export default App;
