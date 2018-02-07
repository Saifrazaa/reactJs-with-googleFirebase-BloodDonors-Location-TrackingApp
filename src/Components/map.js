import React ,{Component} from "react";
class Map extends Component{
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
      <div>
      <div className="alert alert-info" style={styling} >You are Here Right Now</div>
      <iframe id="map" style={mapstyle}  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDQ_YowBXrKttpiLOsY1w41ArSbXsjCcG4&q=24.810743499999997,67.0437712" allowFullScreen>
      </iframe>
      </div>
    )
  }
}
export default Map;
