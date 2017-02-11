import React from 'react';

const FloatingButton = ({ onClick, type, icon }) => (
  <span
    className={`btn-floating btn-floating--${type}`}
    onClick={onClick}
  >
    <i className={icon}></i>
  </span>
);

FloatingButton.propTypes = {
  onClick: React.PropTypes.func,
};

export default FloatingButton;
