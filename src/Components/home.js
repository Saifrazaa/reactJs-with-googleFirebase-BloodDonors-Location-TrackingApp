import React,{Component} from "react";
import firebase from "../Config/firebase";
import Login from "./login";
import Donateblood from "./donateyourblood";
import Map from "./map";
import {
  BrowserRouter as Router,
  Link ,
  Route} from "react-router-dom";
class Home extends Component {
  render(){
    var styling={
      marginTop:"30px",
      fontSize:"20px"
    }
    var mapstyle={
      border:"3px solid black",
      height:"500px",
      width:"500px"

    }
    return (
      <Router>
        <div>
          <center style={styling}><h1>Welcome to Blood Donors Location Tracking Application</h1>
            <hr />
            <br />
            <div style={{marginTop:"30px"}}>
              <Route exact path='/' component={Map} />
              <Route  path="/login" component={Login}/>
              <Route  path="/donate-your-blood" component={Donateblood}/>
              <div style={{marginTop:"30px"}}>
                <a className="btn btn-danger" href="/login">Find Donors</a>
                <a className="btn btn-warning" style={{marginLeft:"20px"}} href="/donate-your-blood">Donate Your Blood</a>
              </div>
            </div>
          </center>
        </div>
      </Router>

    )
  }
}
export default Home;
