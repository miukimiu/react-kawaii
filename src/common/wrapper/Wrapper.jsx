import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Wrapper = ({ style, color, children }) => (
  <div style={style} className="Wrapper" color={color}>
    {children}
  </div>
);

Wrapper.propTypes = {
  style: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  /**
   * Hex color
   */
  color: PropTypes.string,
};

Wrapper.defaultProps = {
  size: 120,
  mood: 'blissful',
  color: '#FDA7DC',
};

export default Wrapper;
