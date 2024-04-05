import { useState } from "react";
import "./App.css";
import WeatherData from "./components/WeatherData";
import WeatherInput from "./components/WeatherInput";
import Header from "./components/layout/Header";
import  'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [data,setData] = useState(null);


const getData = async(latitude,longitude) =>{
  // `https://api.tomorrow.io/v4/weather/forecast?location=${latitude},${longitude}&fields=temperature,weatherCode&apikey=PgLU36npx9imxHdueIN060cGVUnNSoKQ`,
  try{                             
        const response =await fetch(`https://api.tomorrow.io/v4/weather/realtime?location=${latitude},${longitude}&apikey=PgLU36npx9imxHdueIN060cGVUnNSoKQ`,
          { method: "GET", headers: { accept: "application/json" } })
          const data = await  response.json()
          console.log(data)
          setData(data)
    }
    catch(err){
        console.log(err)
    }
  }
  return (
    <div className="d-flex flex-column align-items-center">
      <Header/>
      <WeatherInput onFetchData={getData} />
      <WeatherData data ={data}/>
    </div>
  );
}

export default App;
