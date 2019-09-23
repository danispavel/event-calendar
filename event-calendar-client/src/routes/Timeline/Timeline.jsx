import React from "react";
import lifecycle from "react-pure-lifecycle";
import PropTypes from "prop-types";

import Hour from "./components/Hour/Hour.jsx";
import Event from "./components/Event/Event.jsx";
import AddButton from "./components/AddButton/AddButton.jsx";
import ButtonDownloadJson from "./components/ButtonDownloadJson/ButtonDownloadJson.jsx";
import "./Timeline.css";

const methods = {
  componentDidMount(props) {
    const { fetchEvents } = props;

    fetchEvents();
  }
};

function compare(a, b) {
  if (a.start < b.start) {
    return -1;
  }
  if (a.start > b.start) {
    return 1;
  }
  return 0;
}

const eventWalker = (arr, index, width, pos) => {
  if (arr[index].pos < pos) {
    arr[index].pos = pos;
    width++;
  }

  pos++;
  for (let i = index + 1; i < arr.length; i++) {
    if (
      arr[index].start <= arr[i].start &&
      arr[i].start <= arr[index].start + arr[index].duration
    ) {
      width = eventWalker(arr, i, width, pos);
    }
  }

  arr[index].width = width;
  return width;
};

const Timeline = props => {
  const hours = [];
  const renderEvents = [];
  const { events, deleteEvent } = props;

  if (events.length > 0) {
    events.sort(compare);
    for (let i = 0; i < events.length; i++) {
      events[i].pos = 1;
      events[i].width = 1;
    }
    for (let i = 0; i < events.length; i++) {
      i += eventWalker(events, i, events[i].width, events[i].pos) - 1;
    }
  }

  for (let i = 7; i < 16; i++) {
    hours.push(<Hour key={i} timeH={(i % 12) + 1} />);
  }

  for (let i = 0; i < events.length; i++) {
    renderEvents.push(
      <Event
        key={events[i]._id}
        event={events[i]}
        deleteHandler={deleteEvent}
      />
    );
  }

  return (
    <div className="time-line">
      <AddButton />
      <ButtonDownloadJson events={events} />
      <div className="event-container">{renderEvents}</div>
      {hours}
    </div>
  );
};

Timeline.propTypes = {
  events: PropTypes.array.isRequired,
  deleteEvent: PropTypes.func.isRequired
};

export default lifecycle(methods)(Timeline);
