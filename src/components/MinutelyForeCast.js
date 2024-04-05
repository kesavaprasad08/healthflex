const MinutelyForeCast = (props) => {
  let data = props.data.values;
  const date = new Date(props.data.time);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const finalDate = `${hours}-${minutes}`;
  return (
    <div className=" bg-light p-2 m-2 d-flex flex-column align-items-center ">
      <div>Minute : {finalDate}</div>
      <div>Temperature: {data.temperature}°C</div>
      <div>Apparent Temperature: {data.temperatureApparent}°C</div>
      <div>Humidity: {data.humidity}%</div>
      <div>Cloud Cover: {data.cloudCover}</div>
      <hr />
    </div>
  );
};

export default MinutelyForeCast;
