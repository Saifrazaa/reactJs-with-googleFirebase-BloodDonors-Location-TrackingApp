import React,{Component} from "react";
import firebase from "../Config/firebase";
class Donateblood extends Component {
  constructor(){
    super();
  }
  componentDidMount(){

  }
  createuser(){
    var username=document.getElementById('username').value;
    var email   =document.getElementById('email').value;
    var bloodgroup=document.getElementById('bloodgroup').value;
    var address =document.getElementById('address').value;
    var phoneno=document.getElementById('phoneno').value;
    // var latitude=document.getElementById('latitude').value='';
    // var longitude=document.getElementById('longitude').value='';
    var errors=document.getElementById('error');
    if(username===""){
      errors.innerHTML="<div class='alert alert-warning' style='width:400px;height:auto'>Username is Required</div>"
    }
    else if(email===""){
      errors.innerHTML="<div class='alert alert-warning' style='width:400px;height:auto'>Please Enter a Valid Email Address</div>"
    }
    else if(bloodgroup===""){
      errors.innerHTML="<div class='alert alert-warning' style='width:400px;height:auto'>Please Select Your Blood Group</div>"
    }
    else if(address===""){
      errors.innerHTML="<div class='alert alert-warning' style='width:400px;height:auto'> Please Provide Your Address</div>"
    }
    else if(phoneno===""){
      errors.innerHTML="<div class='alert alert-warning' style='width:400px;height:auto'>Please Provide Your Mobile Number</div>"
    }
    else{
      var pleasewait=document.getElementById('pleasewait');
      pleasewait.innerHTML="<div class='alert alert-warning' style='width:300px'>Submitting Your Details .....</div>"
      var user={
        username:username,
        email:email,
        bloodgroup:bloodgroup,
        address:address,
        phoneno:phoneno,
      }
      if(bloodgroup==="A")
      {
        firebase.database().ref("users").child("A").push().set(user).then(function(response){
            console.log("successfully Sign Up");
            window.location="/";
        }).catch(function(error){
            console.log("error in saving");
        });
        firebase.database().ref("users").child("AB").push().set(user).then(function(response){
            console.log("successfully Sign Up");
            window.location="/";
        }).catch(function(error){
            console.log("error in saving");
        });
      }
      else if(bloodgroup==="B")
      {
        firebase.database().ref("users").child("B").push().set(user).then(function(response){
            console.log("successfully Sign Up");
            window.location="/";
        }).catch(function(error){
            console.log("error in saving");
        });
        firebase.database().ref("users").child("AB").push().set(user).then(function(response){
            console.log("successfully Sign Up");
            window.location="/";
        }).catch(function(error){
            console.log("error in saving");
        });
      }
      else if(bloodgroup==="O")
      {
        firebase.database().ref("users").child("O").push().set(user).then(function(response){
            console.log("successfully Save in O");

        }).catch(function(error){
          console.log("error in saving into O");
        });;
        firebase.database().ref("users").child("A").push().set(user).then(function(response){
          console.log("successfully save to A");
        }).catch(function(error){
          console.log("error in saving A");
        });
        firebase.database().ref("users").child("B").push().set(user).then(function(response){
          console.log("successfully save into B");
            window.location="/";
        }).catch(function(error){
          console.log("error in saving B");

        })
        firebase.database().ref("users").child("AB").push().set(user).then(function(response){
          console.log("successfully save into AB");
            window.location="/";
        }).catch(function(error){
          console.log("error in saving AB");

        })
      }
      else if(bloodgroup==="AB")
      {
        firebase.database().ref("users").child("AB").push().set(user).then(function(response){
            console.log("successfully Sign Up");
            window.location="/";
        }).catch(function(error){
            console.log("error in saving");
        });;
      }

    }

  }

  render(){
    var styling={
      marginTop:"30px"
    }
    var styles={
      width:"400px"
    }
    return (
        <div>
          <center style={styling}>
              <hr />
              <h4 className="alert alert-info">Please Enter Your Details</h4>
              <div id="error"></div>
              <hr />
              <div id="errors"></div>

              <div style={styling} className="form-group" >
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input id="username" type="text" style={styles} className="form-control" name="email" placeholder="Username"  required />
              </div>
              <div style={styling} className="form-group" >
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
              <input id="email" type="text" style={styles} className="form-control" name="email" placeholder="Email"  required />
              </div>


              <div className="form-group" style={styling}>
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                  <input id="address" type="text" style={styles} className="form-control" name="email" placeholder="Address"  required />
              </div>

              <div className="form-group" style={styling}>
                  <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                  <input id="phoneno" type="text" style={styles} className="form-control" name="password" placeholder="Phone Number"  required />
              </div>
              <div className="form-group" style={styling}>

                <select style={styles} className="form-control" selected="bloodgroup" required name="type" id="bloodgroup">
                              <option value="" disabled defaultValue selected>What is Your Blood Group?</option>
                              <option className="form-control" name="mechanic" id="A" value="A">A</option>
                              <option name="electrician" id="B" value="B">B</option>
                              <option name="plumber" id="O" value="O">O</option>
                              <option name="photographer" id="AB" value="AB">AB</option>

                </select>
              </div>
                <input type="hidden" id="donor-latitude" />
                <input type="hidden" id="donor-longitude" />
                <button className="btn btn-info" style={styling} onClick={this.createuser} >Submit Details</button>
                <div id="pleasewait" style={{marginTop:"30px"}}></div>
            </center>

        </div>
    )
  }
}
export default Donateblood;
