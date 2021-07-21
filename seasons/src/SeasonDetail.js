import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winder";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDetails = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);
  return <div>Season detail</div>;
};

export default SeasonDetails;
