import React from "react";
import PropTypes from "prop-types";

import "./ButtonDownloadJson.css";

const ButtonDownloadJson = props => {
  const { events } = props;
  const eventsJson = events.map(event => {
    return { title: event.title, start: event.start, duration: event.duration };
  });
  const dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(eventsJson));
  return (
    <a className="download-button" href={dataStr} download="calendar.json">
      <i className="fas fa-file-download"></i>
    </a>
  );
};

ButtonDownloadJson.propTypes = {
  events: PropTypes.array.isRequired
};

export default ButtonDownloadJson;
