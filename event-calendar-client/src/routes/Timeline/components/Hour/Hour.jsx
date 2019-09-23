import React from "react";
import PropTypes from "prop-types";
import "./Hour.css";

const Hour = props => {
  const { timeH } = props;
  return (
    <div className="hour">
      <div className="time">
        <div className="whole-hour">{`${timeH}:00`}</div>
        <div className="half-hour">{`${timeH}:30`}</div>
      </div>
      <div className="event-space"></div>
    </div>
  );
};

Hour.propTypes = {
  timeH: PropTypes.number
};

export default Hour;
