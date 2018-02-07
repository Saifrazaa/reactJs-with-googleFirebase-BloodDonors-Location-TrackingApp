import React,{Component} from "react";
import firebase from "../Config/firebase";
class Login extends Component {
  userlogin(){
    var pleasewait=document.getElementById('pleasewait');
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var firebaseref=firebase.auth().signInWithEmailAndPassword(email,password).then(function(response){
      if(response){
        pleasewait.innerHTML="<div class='alert alert-warning' style='width:300px'>Redirecting To The Page.....</div>"
        console.log("successfully sign in");
        window.location="/find-donors";
      }
    }).catch(function(error){

        var errordiv=document.getElementById('error');
        var errorMessage=error.message;
        errordiv.innerHTML="<alert class='alert alert-danger'>"+errorMessage+"</alert>";

    })
  }
  render(){
    var styling={
      marginTop:"50px"
    }

    return (
      <div>
        <center style={{marginBottom:"100px"}}>
          <h4 style={styling}>Please Verify Yourself</h4>
          <div>
            <div id="error" style={styling}></div>
            <input type="text" style={{width:"400px",marginTop:"30px"}} id="email" className="form-control" placeholder="Email" required/>
            <br />
            <input type="password" style={styling,{width:"400px",marginTop:"20px"}} id="password" className="form-control" placeholder="Password" required/>
            <br />
            <button className="alert alert-danger" id="login" onClick={this.userlogin}  style={styling}>Login</button>
            <div id="pleasewait"></div>
            <p>Do Not Have Account?<a href="/signup">Sign Up</a></p>

          </div>
        </center>
      </div>
    )

  }
}
export default Login;
