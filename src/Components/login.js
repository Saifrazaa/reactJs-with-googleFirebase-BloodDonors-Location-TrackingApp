import React,{Component} from "react";
class Login extends Component {
  userlogin(){
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var firebaseref=Firebase.auth().signInWithEmailandPassword(email,password).then(function(response){
      if(response){
        console.log("successfully loged in");
      }
    }).catch(function(error){
      console.log(error);
    });
  }
  render(){
    var styling={
      marginTop:"30px"
    }
    return (
      <div>
        <center>
          <h1 style={styling}>Please Verify Yourself</h1>
          <div>
            <input type="text" style={styling} id="email" placeholder="Email" required/>
            <br />
            <input type="text" style={styling} id="password" placeholder="Password" required/>
            <br />
            <button className="alert alert-danger" id="login" onClick={this.userlogin}  style={styling}>Login</button>

          </div>
        </center>
      </div>
    )

  }
}
export default Login;
