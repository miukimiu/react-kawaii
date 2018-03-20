import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const SpeechBuble = props => (
  <div
    style={{
      left: props.width,
      top: props.rectangular ? props.height / 7 : props.height / 3.5,
      width: props.width * 0.65,
      minHeight: props.width / 3.3,
      background: props.color,
    }}
    className={`speech ${props.classNames}`}
  >
    <div
      className="after"
      style={{
        background: props.color,
      }}
    />
    <span
      className="text"
      style={{
        fontSize: props.width / 11,
      }}
    >
      {props.text}
    </span>
  </div>
);

SpeechBuble.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  text: PropTypes.string,
  color: PropTypes.string,
  classNames: PropTypes.string,
  rectangular: PropTypes.bool,
};

SpeechBuble.defaultProps = {
  width: 150,
  color: '#83D1FB',
  text: null,
  classNames: null,
  rectangular: true,
};

export default SpeechBuble;
