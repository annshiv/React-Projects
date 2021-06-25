import React from "react";

const Forecast = (props) => {
  return (
    <div>
      {props.country && props.city && (
        <p>
          Location : {props.city}, {props.country}{" "}
        </p>
      )}
      {props.temperature && <p>Temperature: {props.temperature}</p>}
      {props.error && <p>{props.error}</p>}
    </div>
  );
};

export default Forecast;