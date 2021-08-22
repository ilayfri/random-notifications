const Details = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Notification Assignment</h1>
      <div>
        <h3>Your random details:</h3>
        <div>
          <b>Period time: </b>
          {props.periodTime} seconds
        </div>
        <div>
          <b>duration time: </b>
          {props.durationTime} seconds
        </div>
      </div>
      <br></br>
      Clicking on a notification will cause it not to be shown anymore
    </div>
  );
};

export default Details;
