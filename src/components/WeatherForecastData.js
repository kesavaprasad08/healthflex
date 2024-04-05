import { useState } from "react";
import { Button } from "react-bootstrap";
import Forecast from "../components/ForeCast";
import HourlyForecast from "../components/HourlyForecast";
import MinutelyForeCast from "./MinutelyForeCast";
const WeatherForecastData = (prop) => {
  const [current, setCurrent] = useState("");
  if (prop.data === null) {
    return <div></div>;
  }

  const dailyData = prop.data.timelines.daily.map((day) => (
    <Forecast key={Math.random()} data={day} />
  ));
  const hourlyData = prop.data.timelines.hourly.map((day) => (
    <HourlyForecast key={Math.random()} data={day} />
  ));
  const minutelyData = prop.data.timelines.minutely.map((day) => (
    <MinutelyForeCast key={Math.random()} data={day} />
  ));

  return (
    <div className="w-50 bg-light p-2 m-2 d-flex flex-column align-items-center ">
      <h4> Weather Forecast Data</h4>
      <div>
        <Button
          className="m-2"
          onClick={() => {
            setCurrent("daily");
          }}
        >
          daily
        </Button>
        <Button
          onClick={() => {
            setCurrent("hourly");
          }}
        >
          hourly
        </Button>
        <Button
          className="m-2"
          onClick={() => {
            setCurrent("minutely");
          }}
        >
          minutely
        </Button>
        {current !== "" && (
          <Button
            className="m-2"
            onClick={() => {
              setCurrent("");
            }}
          >
            Close
          </Button>
        )}
      </div>
      {current === "daily" && dailyData}
      {current === "hourly" && hourlyData}
      {current === "minutely" && minutelyData}
    </div>
  );
};

export default WeatherForecastData;
