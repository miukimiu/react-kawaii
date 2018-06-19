import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import './style.css';

const Wrapper = ({ style, color, children }) => (
  <div style={style} className="kawaii-wrapper" color={color}>
    {children}
  </div>
);

Wrapper.propTypes = {
  style: stylePropType.isRequired,
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
