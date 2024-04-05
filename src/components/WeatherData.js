const WeatherData = (props) => {
  if (!props.data) {
    return <div></div>;
  }
  let data = props.data.data.values;
  let location = props.data.location;
  return (
    <div className="w-50 bg-light p-2 m-2 d-flex flex-column align-items-center ">
      <div>
        <h5> Location: {location.lat}, {location.lon}</h5>
      </div>
      <div>
        Temperature: {data.temperature}°C
      </div>
      <div>
        Apparent Temperature: {data.temperatureApparent}°C
      </div>
      <div>
        Humidity: {data.humidity}%
      </div>
      <div>
        Cloud Cover: {data.cloudCover}
      </div>
    </div>
  );
};

export default WeatherData;
