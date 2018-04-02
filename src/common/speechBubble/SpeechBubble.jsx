import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const SpeechBuble = ({ width, text, color, classNames, speechBubbleTop }) => (
  <div
    style={{
      left: width + 8,
      top: speechBubbleTop,
      width: width * 0.65,
      minHeight: width / 3.3,
      background: color,
    }}
    className={`speech ${classNames}`}
  >
    <div
      className="after"
      style={{
        background: color,
      }}
    />
    <span
      className="text"
      style={{
        fontSize: width / 11,
      }}
    >
      {text}
    </span>
  </div>
);

SpeechBuble.propTypes = {
  width: PropTypes.number.isRequired,
  text: PropTypes.string,
  color: PropTypes.string,
  classNames: PropTypes.string,
  speechBubbleTop: PropTypes.number.isRequired,
};

SpeechBuble.defaultProps = {
  width: 150,
  color: '#83D1FB',
  text: null,
  classNames: null,
};

export default SpeechBuble;
