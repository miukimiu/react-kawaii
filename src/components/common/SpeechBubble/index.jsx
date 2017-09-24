import React from 'react';
import './style.scss';

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
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  text: React.PropTypes.string,
  color: React.PropTypes.string,
  classNames: React.PropTypes.string,
  rectangular: React.PropTypes.bool,
};

SpeechBuble.defaultProps = {
  width: 150,
  color: '#83D1FB',
  text: null,
  classNames: null,
  rectangular: true,
};

export default SpeechBuble;
