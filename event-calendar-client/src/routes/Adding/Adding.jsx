import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Button from "../../shared/Button/Button.jsx";
import "./Adding.css";

class Adding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      start: "08:00",
      end: "08:00",
      error: ""
    };
  }
  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  handleStartChange(e) {
    this.setState({ start: e.target.value });
  }
  handleEndChange(e) {
    this.setState({ end: e.target.value });
  }
  handleAdd() {
    const { name, start, end } = this.state;
    const { history, addEvent } = this.props;
    const startTime =
      +start[0] * 10 * 60 + +start[1] * 60 + +start[3] * 10 + +start[4];
    const endTime = +end[0] * 10 * 60 + +end[1] * 60 + +end[3] * 10 + +end[4];
    let isOk = true;

    if (name.length == 0) {
      this.setState({ error: "input name" });
      isOk = false;
    } else if (startTime < 480) {
      this.setState({ error: "start time is too early" });
      isOk = false;
    } else if (startTime > 1020) {
      this.setState({ error: "start time is too late" });
      isOk = false;
    } else if (endTime < startTime) {
      this.setState({ error: "end time is earlier than start time" });
      isOk = false;
    } else if (endTime <= 480) {
      this.setState({ error: "end time is too early" });
      isOk = false;
    } else if (endTime >= 1020) {
      this.setState({ error: "end time is too late" });
      isOk = false;
    }
    if (isOk) {
      const event = {
        title: name,
        start: startTime - 480,
        duration: endTime - startTime
      };
      addEvent(event);
      history.push("/");
    }
  }
  render() {
    const { history } = this.props;

    return (
      <div className="adding">
        <div className="adding-container">
          <span className="time-title">Event name </span>
          <input
            type="textarea"
            className="event-name time-input"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleNameChange.bind(this)}
          />
          <span className="time-title">Starts </span>
          <input
            className="start-time time-input"
            type="time"
            value={this.state.start}
            onChange={this.handleStartChange.bind(this)}
          />
          <span className="time-title">Ends </span>
          <input
            className="end-time time-input"
            type="time"
            value={this.state.end}
            onChange={this.handleEndChange.bind(this)}
          />
          <span className="time-title time-error ">{this.state.error}</span>
          <div className="adding-buttons">
            <Button
              className="button-cancel"
              title="cancel"
              onClick={() => history.push("/")}
            />
            <Button
              className="button-ok"
              title="ok"
              onClick={this.handleAdd.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

Adding.propTypes = {
  history: PropTypes.object.isRequired,
  addEvent: PropTypes.func.isRequired
};
export default withRouter(Adding);
