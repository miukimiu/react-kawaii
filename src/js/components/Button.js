import React from 'react';
// include the stylesheet entry point
require('../../sass/components/_button.scss');

const Button = ({ children, onClick, type, disabled }) => (

  <button
    className={`btn btn--${type}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

Button.propTypes = {
  onClick: React.PropTypes.func,
};

export default Button;
