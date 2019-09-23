import React from "react";
import PropTypes from "prop-types";
import "./Event.css";

const Event = props => {
  const { _id, pos, start, width, duration } = props.event;
  const { deleteHandler } = props;
  let { title } = props.event;
  const charLimit = Math.round(200 / width / 6) - 7;

  if (charLimit < title.length) {
    title = title.slice(0, charLimit) + "...";
  }

  return (
    <div
      className="event"
      style={{
        marginTop: start * 2,
        height: duration * 2,
        width: Math.round(200 / width),
        marginLeft: Math.round((200 / width) * (pos - 1))
      }}
    >
      {title}
      <div
        className="deleteButton"
        onClick={e => {
          deleteHandler(_id);
          e.stopPropagation();
        }}
      >
        ✖
      </div>
    </div>
  );
};

Event.propTypes = {
  event: PropTypes.object,
  deleteHandler: PropTypes.func.isRequired
};

export default Event;
