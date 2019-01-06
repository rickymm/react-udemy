import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    icon: "massive sun icon"
  },
  winter: {
    text: "Burr, it's chilly",
    icon: "massive snowflake icon"
  }
};

const getSeason = (lat, month) => {
  if (month >= 3 && month <= 8) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, icon } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${icon}`} />
      <h1>{text}</h1>
      <i className={`icon-right ${icon}`} />
    </div>
  );
};

export default SeasonDisplay;
