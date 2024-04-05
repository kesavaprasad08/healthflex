import { useState } from "react";
import { Button } from "react-bootstrap";

const WeatherInput = (props) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const latitudeChangeHandler = (e) => {
    setLatitude(e.target.value);
  };
  const longitudeChangeHandler = (e) => {
    setLongitude(e.target.value);
  };
  const submitHandler = () => {
    props.onFetchData(latitude,longitude)
  };

  const currentLocationHandler = () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            let {latitude,longitude}=position.coords;
            props.onFetchData(latitude,longitude)
        })
    }
  };
  

  return (
    <div className="w-50 bg-light p-2 m-2 d-flex flex-column align-items-center ">
      <h4>Real Time Weather</h4>
      <div>
        <label htmlFor="latitude" className="m-3">
          Latitude :
        </label>
        <input
          type="text"
          className="pl-2"
          value={latitude || ""}
          onChange={latitudeChangeHandler}
        ></input>
      </div>
      <div>
        <label htmlFor="longitude" className="m-3">
          Longitude :
        </label>
        <input
          type="text"
          className="pl-1"
          value={longitude || ""}
          onChange={longitudeChangeHandler}
        ></input>
      </div>
      <div className="d-flex">
      <Button className="mx-2" onClick={currentLocationHandler}>
      Search for Current Location 
    </Button>   
      <Button className="" onClick={submitHandler}>
        Search
      </Button>
      
    </div>
    </div>
  );
};

export default WeatherInput;
