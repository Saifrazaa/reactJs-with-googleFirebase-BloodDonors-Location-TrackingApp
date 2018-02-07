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
        if(bloodgroup==="A")
        {
            var ref=firebase.database().ref("users").child("A");
            ref.on('value',getresponse,geterror);
            function  getresponse(response){
              var values=response.val();
              var keys=Object.keys(values);
              for(var i=0;i<keys.length ;i++){
                var t=keys[i];
                var username=values[t].username;
                var email=values[t].email;
                var address=values[t].address;
                var phoneno=values[t].phoneno;
                var bloodgroup=values[t].bloodgroup;
                donorsdetail.innerHTML+="<td>"+i+"</td><td>"+username+"</td><td>"+email+"</td><td>"+address+"</td><td>"+phoneno+"</td><td>"+bloodgroup+"</td>";
                pleasewait.innerHTML="";
              }
            }
            function geterror(error){
              console.log(error.message);
            }
        }
        else if(bloodgroup==="B")
        {
          var ref=firebase.database().ref("users").child("B");
          ref.on('value',getresponse,geterror);
          function  getresponse(response){
            var values=response.val();
            var keys=Object.keys(values);
            for(var i=0;i<keys.length ;i++){
              var t=keys[i];
              var username=values[t].username;
              var email=values[t].email;
              var address=values[t].address;
              var phoneno=values[t].phoneno;
              var bloodgroup=values[t].bloodgroup;
              donorsdetail.innerHTML+="<td>"+i+"</td><td>"+username+"</td><td>"+email+"</td><td>"+address+"</td><td>"+phoneno+"</td><td>"+bloodgroup+"</td>";
              pleasewait.innerHTML="";
            }
          }
          function geterror(error){
            console.log(error.message);
          }
        }
        else if(bloodgroup==="O"){
          var ref=firebase.database().ref("users").child("O");
          ref.on('value',getresponse,geterror);
          function  getresponse(response){
            var values=response.val();
            var keys=Object.keys(values);
            for(var i=0;i<keys.length ;i++){
              var t=keys[i];
              var username=values[t].username;
              var email=values[t].email;
              var address=values[t].address;
              var phoneno=values[t].phoneno;
              var bloodgroup=values[t].bloodgroup;
              donorsdetail.innerHTML+="<td>"+i+"</td><td>"+username+"</td><td>"+email+"</td><td>"+address+"</td><td>"+phoneno+"</td><td>"+bloodgroup+"</td>";
              pleasewait.innerHTML="";
            }
          }
          function geterror(error){
            console.log(error.message);
          }
        }
        else if(bloodgroup==="AB"){
          var ref=firebase.database().ref("users").child("AB");
          ref.on('value',getresponse,geterror);
          function  getresponse(response){
            var values=response.val();
            var keys=Object.keys(values);
            for(var i=0;i<keys.length ;i++){
              var t=keys[i];
              var username=values[t].username;
              var email=values[t].email;
              var address=values[t].address;
              var phoneno=values[t].phoneno;
              var bloodgroup=values[t].bloodgroup;
              donorsdetail.innerHTML+="<td>"+i+"</td><td>"+username+"</td><td>"+email+"</td><td>"+address+"</td><td>"+phoneno+"</td><td>"+bloodgroup+"</td>";
              pleasewait.innerHTML="";
            }
          }
          function geterror(error){
            console.log(error.message);
          }
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
