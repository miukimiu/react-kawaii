import React from 'react';

const FloatingButton = ({ onClick, type, icon,  ...attrs }) => (
  <span
    className={`btn-floating btn-floating--${type}`}
    onClick={onClick}
    {...attrs}
  >
    <i className={icon}></i>
  </span>
);

FloatingButton.propTypes = {
  onClick: React.PropTypes.func,
};

export default FloatingButton;
