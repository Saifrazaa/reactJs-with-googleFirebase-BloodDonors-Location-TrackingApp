import React,{Component} from "react";
import firebase from "../Config/firebase";
import { browserHistory } from "react-router";
import {Redirect,BrowserRouter as Router} from "react-router-dom";
class Signup extends Component {
  constructor(){
    super();
    }
  usersignup(){

    var username=document.getElementById('username').value;
    var email  =document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var cpassword=document.getElementById('cpassword').value;
    var error=document.getElementById('error');
    if(email==="")
    {
      error.innerHTML="<div class='alert alert-danger' style='width:500px'>Please Provide Your Email Address</div>";
    }
    else if(password==="")
    {
      error.innerHTML="<div class='alert alert-danger' style='width:500px'>Your Password is Required</div>";
    }
    else if(cpassword==="")
    {
      error.innerHTML="<div class='alert alert-danger' style='width:500px'>Please confirm Your password</div>";
    }
    else if(password===cpassword){
      firebase.auth().createUserWithEmailAndPassword(email,password).then(function(response){
          console.log("successfully sign up");
          var redirect=document.getElementById('redirect');
          window.location="/";
        })
      .catch(function(errors){
        error.innerHTML="<div class='alert alert-danger' style='width:500px'>"+errors.message+"</div>"
      })
    }
  }
  render(){
    return (
      <Router>
          <div>
            <center style={{marginTop:"30px"}}>
                <h4 style={{marginTop:"50px"}}>Sign Up To Get Start</h4>
                <hr />
                <div id="error"></div>
                <input type="text" style={{marginTop:"30px",width:"400px"}} className="form-control" id="username"  placeholder="Username" />
                <input type="email"style={{marginTop:"30px",width:"400px"}} className="form-control" id="email"     placeholder="Email" />
                <input type="password" style={{marginTop:"30px",width:"400px"}} className="form-control" id="password"  placeholder="Password"/>
                <input type="password" style={{marginTop:"30px",width:"400px"}} className="form-control" id="cpassword" placeholder="ConfirmPassword"/>
                <button style={{marginTop:"30px"}} className="btn btn-success" onClick={this.usersignup}>Sign Up</button>
                <div id="redirect"></div>
            </center>
          </div>

      </Router>
    )
  }
}
export default Signup;
