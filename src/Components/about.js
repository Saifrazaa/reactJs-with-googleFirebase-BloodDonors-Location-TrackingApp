import React,{Component} from "react";
class About extends Component {
  render(){
    return (
      <div>
          <center style={{marginTop:"30px"}}>
            <h1><strong>What is Blood Donor App</strong></h1>

              <hr />
            <p style={{marginTop:"30px"}}>
                <i>This is a Database Application for the Blood Donors .If somebody wants to do help of others by donating their blood than this platform is very beneficial for them.They
                  can come and submit their details into our database .
                </i>
                <br />
                <br />
                <b style={{marginTop:"30px"}}>
                <i>If Someone wants to get blood then he can by doing sign up to that website.
                    <br />
                    if You are already a member of Blood Donor app then you can directly searc the donors.
                </i>
                </b>

            </p>
            <div style={{marginTop:"40px",width:"400px"}} className="alert alert-info">We provide the actual location of the donor</div>
            <br />
            <strong className="text text-warning" style={{fontSize:"30px"}}>This is a location tracking Web Application of Donors</strong>
          </center>
      </div>
    )
  }
}
export default About;
