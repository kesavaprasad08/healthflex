const Forecast = (props) => {
  let data = props.data.values;
  const date = new Date(props.data.time);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  const finalDate = `${day}-${month}-${year}`;
  return (
    <div className=" w-100 bg-light p-2 m-2 d-flex flex-column align-items-center border-bottom border-dark ">
      <div>Date : {finalDate}</div>
      <div>Temperature: {data.temperatureAvg}°C</div>
      <div>Apparent Temperature: {data.temperatureApparentAvg}°C</div>
      <div>Humidity: {data.humidityAvg}%</div>
      <div>Cloud Cover: {data.cloudCoverAvg}</div>
    </div>
  );
};

export default Forecast;
