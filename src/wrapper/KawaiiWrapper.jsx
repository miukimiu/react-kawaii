import React, { Component } from 'react';
import SpeechBuble from '../SpeechBubble';
import './style.css';

class KawaiiWrapper extends Component {
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
        className="KawaiiWrapper"
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
          this.props.text &&
          <SpeechBuble
            color={this.props.color}
            width={this.props.width}
            height={this.props.height}
            text={this.props.text}
            rectangular={false}
          />}
        {this.props.showTextOnHover &&
          this.props.text &&
          this.state.hover &&
          <SpeechBuble
            classNames="planetSpeech"
            color={this.props.color}
            width={this.props.width}
            height={this.props.height}
            text={this.props.text}
            rectangular={false}
          />}
      </div>
    );
  }
}

KawaiiWrapper.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  style: React.PropTypes.string.isRequired,
  children: React.PropTypes.element.isRequired,
  /**
  * Hex color
  */
  color: React.PropTypes.string,
  /**
   * Set the text to show on the speech bubble
   */
  text: React.PropTypes.string,
  /**
   * Set as true to show the speech bubble on hover, as false to show text by default
   */
  showTextOnHover: React.PropTypes.bool,
};

KawaiiWrapper.defaultProps = {
  size: 120,
  mood: 'blissful',
  color: '#FDA7DC',
  showTextOnHover: true,
  text: null,
};

export default KawaiiWrapper;
