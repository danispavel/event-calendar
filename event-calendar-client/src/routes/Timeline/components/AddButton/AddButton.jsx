import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import "./AddButton.css";

const AddButton = props => {
  const { history } = props;
  return (
    <div className="add-button" onClick={() => history.push("/add")}>
      <i className="fas fa-plus plus"></i>
    </div>
  );
};

AddButton.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(AddButton);
