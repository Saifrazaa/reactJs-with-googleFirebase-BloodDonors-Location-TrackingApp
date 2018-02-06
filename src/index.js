import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,
        Link,
        Route,
        Switch
} from "react-router-dom";
import * as firebase from "firebase";
import './index.css';
import Aboutus from "./Components/about";
import Contactus from "./Components/contact";
import Finddonors from "./Components/finddonors";
import Donateblood from "./Components/donateyourblood";
import Login from "./Components/login";
import Signup from "./Components/signup";
import registerServiceWorker from './registerServiceWorker';
var config = {
    apiKey: "AIzaSyBstq20vaaHs8DANRBIkbskHUHk-YWCDAo",
    authDomain: "blooddonorapp-262c1.firebaseapp.com",
    databaseURL: "https://blooddonorapp-262c1.firebaseio.com",
    projectId: "blooddonorapp-262c1",
    storageBucket: "blooddonorapp-262c1.appspot.com",
    messagingSenderId: "253407415755"
  };
firebase.initializeApp(config);

class Home extends Component{

  render(){
    var styling={
      color:"white",
      fontSize:"20px",
      fontFamily:"algerian"
    }
    var linkstyle={
      fontSize:"20px",
      fontFamily:"algerian",
      color    :"white"
    }
    var dropdown={
      fontSize:"15px",
      fontFamily:"algerian"
    }
  return (
    <Router >
      <div>
        <nav className="navbar navbar-inverse bg-primary">
        <strong style={styling}>Blood Donor App</strong>
        <div className="navbar nabar-right" >
  				<Link className="navbar navbar-content" style={styling} to="/">Home</Link>
  				<div className="dropdown" >
          <button className="btn btn-primary dropdown-toggle navbar navbar-content" style={linkstyle} type="button" data-toggle="dropdown">Services
					  <span className="caret"></span></button>
					  	<ul className="dropdown-menu">
					    <li><Link className="navbar navbar-content" style={dropdown} to="/login">Find A Donor</Link></li>
					    <li><Link className="navbar navbar-content" style={dropdown} to="/donate-your-blood">Donate Your Blood</Link></li>
					  	</ul>
          </div>
          <Link className="navbar navbar-content" style={styling} to="/signup">Sign Up</Link>
  				<Link className="navbar navbar-content" style={styling} to="/login">Log In</Link>
  				<Link className="navbar navbar-content" style={styling} to="/aboutus">About Us</Link>
  				<Link className="navbar navbar-content" style={styling} to="/contactus">Contact Us</Link>
        </div>
        </nav>
        <h1>You are at home page</h1>
        <Switch>

          <Route  path="/login" component={Login}/>
          <Route  path="/signup" component={Signup}/>
          <Route  path="/aboutus" component={Aboutus}/>
          <Route  path="/contactus" component={Contactus}/>
          <Route  path="/find-donors" component={Finddonors}/>
          <Route  path="/donate-your-blood" component={Donateblood}/>
        </Switch>
      </div>
      </Router>
    )
  }
}
ReactDOM.render(<Home />,document.getElementById("root"));
registerServiceWorker();
