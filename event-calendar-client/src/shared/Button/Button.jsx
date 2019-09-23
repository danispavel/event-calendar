import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = props => {
  const { title, className, onClick } = props;
  return (
    <div className={`button ${className}`} onClick={onClick}>
      {title}
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;
