import React from "react";
import "./style.scss";

const SpeechBuble = props => (
  <div
    style={{
      left: props.size,
      top: props.rectangular ? props.size * 1.83 / 7 : props.size * 1.83 / 3.5,
      width: props.size * 0.65,
      minHeight: props.size / 3.3,
      background: props.color
    }}
    className={`speech ${props.classNames}`}
  >
    <div
      className="after"
      style={{
        background: props.color
      }}
    />
    <span
      className="text"
      style={{
        fontSize: props.size / 11
      }}
    >
      {props.text}
    </span>
  </div>
);

SpeechBuble.propTypes = {
  size: React.PropTypes.number,
  text: React.PropTypes.string,
  color: React.PropTypes.string,
  classNames: React.PropTypes.string,
  rectangular: React.PropTypes.bool
};

SpeechBuble.defaultProps = {
  size: 150,
  color: "#83D1FB",
  text: null,
  classNames: null,
  rectangular: true
};

export default SpeechBuble;
