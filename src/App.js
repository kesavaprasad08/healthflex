import { useState } from "react";
import "./App.css";
import WeatherData from "./components/WeatherData";
import WeatherInput from "./components/WeatherInput";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherForecastData from "./components/WeatherForecastData";

function App() {
  const [data, setData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const getData = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.tomorrow.io/v4/weather/realtime?location=${latitude},${longitude}&apikey=PgLU36npx9imxHdueIN060cGVUnNSoKQ`,
        { method: "GET", headers: { accept: "application/json" } }
      );
      const data = await response.json();
      const response2 = await fetch(
        `https://api.tomorrow.io/v4/weather/forecast?location=${latitude},${longitude}&apikey=PgLU36npx9imxHdueIN060cGVUnNSoKQ`,
        { method: "GET", headers: { accept: "application/json" } }
      );
      const data2 = await response2.json();
      setForecastData(data2);
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="d-flex flex-column align-items-center">
      {/* <Header /> */}
      <WeatherInput onFetchData={getData} />
      <WeatherData data={data} />
      <WeatherForecastData data={forecastData} />
    </div>
  );
}

export default App;
