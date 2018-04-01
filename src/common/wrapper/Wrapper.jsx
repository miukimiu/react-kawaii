import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SpeechBuble from '../speechBubble/SpeechBubble';
import './style.css';

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
    this.mouseOver = this.mouseOver.bind(this);
  }

  mouseOver() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    return (
      <div
        style={this.props.style}
        className="Wrapper"
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOver}
        hoverState={this.state.hover}
        showTextOnHover={this.props.showTextOnHover}
        text={this.props.text}
        width={this.props.width}
        height={this.props.height}
        color={this.props.color}
      >
        {this.props.children}
        {!this.props.showTextOnHover &&
          this.props.text && (
            <SpeechBuble
              color={this.props.color}
              width={this.props.width}
              height={this.props.height}
              text={this.props.text}
              speechBubbleTop={this.props.speechBubbleTop}
            />
          )}
        {this.props.showTextOnHover &&
          this.props.text &&
          this.state.hover && (
            <SpeechBuble
              classNames="planetSpeech"
              color={this.props.color}
              width={this.props.width}
              height={this.props.height}
              text={this.props.text}
              speechBubbleTop={this.props.speechBubbleTop}
            />
          )}
      </div>
    );
  }
}

Wrapper.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  style: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  /**
   * Hex color
   */
  color: PropTypes.string,
  /**
   * Set the text to show on the speech bubble
   */
  text: PropTypes.string,
  /**
   * Set as true to show the speech bubble on hover, as false to show text by default
   */
  showTextOnHover: PropTypes.bool,
  speechBubbleTop: PropTypes.number.isRequired,
};

Wrapper.defaultProps = {
  size: 120,
  mood: 'blissful',
  color: '#FDA7DC',
  showTextOnHover: true,
  text: null,
};

export default Wrapper;
