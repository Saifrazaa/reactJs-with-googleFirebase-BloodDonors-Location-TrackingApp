import React,{Component} from "react";
class Contact extends Component {
  render(){
    return (
      <div>
          <center style={{marginTop:"40px"}}>
              <h1>Contact Us At</h1>
              <hr />
              <div className="container">
              <table className="table table-bordered">
                <tr><td><h5>Phone Number:</h5></td><td><h5><strong>+923087256653</strong></h5></td></tr>
                <tr><td><h5>Address: </h5></td><td><h5><strong>Panacloud 304,Meat One Building Defence phase 5,karachi</strong></h5></td></tr>
                <tr><td><h5>Email: </h5></td><td><h5><strong>blooddonorapp@gmail.com</strong></h5></td></tr>
                <tr><td><h5>Tele: </h5></td><td><h5><strong>02112345678</strong></h5></td></tr>
              </table>
              <i style={{fontFamily:"algerian",fontSize:"40px"}} className="text text-success">Location</i>
              <hr />
              <br />
              <iframe frameborder="0"  style={{width:"400px",height:"400px",border:"2px solid grey"}} src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDQ_YowBXrKttpiLOsY1w41ArSbXsjCcG4&q=24.810743499999997,67.0437712" allowfullscreen></iframe>
              </div>
          </center>
      </div>
    )
  }
}
export default Contact;
