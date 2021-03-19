import coverPicture from '../src/Images/City-street-bokeh-winter-road-lights_1920x1200.jpg';
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


export const UserContext = createContext();


function App() {
  const [newUser, setNewUser] =useState(false);

  return (
    <UserContext.Provider value={[newUser, setNewUser]}>
      <div className="app">
        <Router>
          <nav>
            <div className="navbar">
              <a to=""><span style={{ color: "yellow",textAlign:"center", fontSize: "70px", fontWeight: "bold" }}>City Explorer</span></a>
            </div>

            <div className="navbar">
              <Link to="/Home" style={{ margin: "20px", padding: "20px",color:"cyan",fontSize:"20px" }}>Home</Link>
              <Link to="/Destination" style={{  margin: "20px", padding: "20px",color:"cyan",fontSize:"20px"  }}>Destination</Link>
              <Link to="/Blog" style={{ margin: "20px", padding: "20px",color:"cyan",fontSize:"20px" }}>Blog</Link>
              <Link to="/Contact" style={{ margin: "20px", padding: "20px",color:"cyan",fontSize:"20px" }}>Contact</Link>
              <Link to="/Login" style={{ margin: "20px", padding: "20px",fontSize:"20px" }}><button>Login</button></Link>
            </div>
          </nav>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/Home">
              <Home></Home>
            </Route>
            <Route path="/Destination">
              <Destination></Destination>
            </Route>
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
            <Route path="/SignUp2">
              <SignUp></SignUp>
            </Route>
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
