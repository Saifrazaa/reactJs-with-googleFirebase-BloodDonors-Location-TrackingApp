import React,{Component} from "react";
import firebase from "../Config/firebase";

class Finddonors extends Component {
  constructor(){
    super();
  }
  userdata(){
    var bloodgroup=document.getElementById('bloodgroup').value;
    var pleasewait=document.getElementById('pleasewait');
    pleasewait.innerHTML="<div class='alert alert-success' style='width:400px;font-size:20px'>Please Wait....</div>"
    var donorsdetail=document.getElementById('donors-detail');

    donorsdetail.innerHTML="<th>Sr No</th><th>Username</th><th>Email</th><th>Address</th><th>Blood Group</th><th>Phone Number</th>";
    var firebaseref=firebase.database().ref("users");
    firebaseref.on("value",getresponse,geterror);
    function getresponse(response){
      var values=response.val();
      var keys=Object.keys(values);
      for (let i=0;i<keys.length ;i++)
      {
        let t=keys[i];
        console.log(values[t]);
        var username=values[t].username;
        var email   =values[t].email;
        var address =values[t].address;
        var phone   =values[t].phoneno;
        var dbloodgroup=values[t].bloodgroup;
        if(bloodgroup==="AB")
        {
        donorsdetail.innerHTML+="<tr><td>"+i+"</td><td>"+username+"</td><td>"+email+"</td><td>"+address+"</td><td>"+dbloodgroup+"</td><td>"+phone+"</td></tr>";
        pleasewait.innerHTML="";
        }
        else if(bloodgroup===dbloodgroup || dbloodgroup==="O"){
          donorsdetail.innerHTML+="<tr><td>"+i+"</td><td>"+username+"</td><td>"+email+"</td><td>"+address+"</td><td>"+dbloodgroup+"</td><td>"+phone+"</td></tr>";
          pleasewait.innerHTML="";
        }
      }
    }
    function geterror(error){
      var message=error.message;
      console.log(message);
    }
  }
  render(){
    return (
      <div>
          <center >
            <h4 style={{marginTop:"30px"}} className="alert alert-info">What is Your Blood Group</h4>
            <hr />
            <select id="bloodgroup" className="form-control" style={{width:"400px",marginTop:"30px"}}>
              <option  disabled defaultValue selected className="form-control">Select Your Blood Group</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="O">O</option>
              <option value="AB">AB</option>
            </select>
            <button onClick={this.userdata} className="btn btn-info" style={{marginTop:"20px"}}>Find</button>
            <div id="pleasewait" style={{marginTop:"40px",marginBottom:"40px"}}></div>
          <table className="table table-bordered table-hover table-striped" id="donors-detail" style={{marginTop:"30px"}}>

            </table>
          </center>
      </div>
    )
  }
}
export default Finddonors;
