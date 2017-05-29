import React, { Component } from "react";
import paths from "./paths";
import Face from "../Face";
import SpeechBuble from "../SpeechBubble";
import "./style.scss";

class KawaiiIceCream extends Component {
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
        style={{ width: this.props.size, height: this.props.size * 1.83 }}
        className="kawaiiElementWrapper"
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOver}
      >
        <svg
          width={this.props.size}
          height={this.props.size * 1.83}
          viewBox="209 278 119 220"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="kawaii-iceCream"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            transform="translate(218.000000, 278.000000)"
          >
            <g id="kawaii-iceCream__body" fillRule="nonzero">
              <path
                d={paths.stick}
                id="kawaii-iceCream__body__stick"
                fill="#FCCB7E"
              />
              <path
                d={paths.body}
                id="kawaii-iceCream__body__color"
                fill={this.props.color}
              />
              <path
                d={paths.bodyShadow}
                id="kawaii-iceCream__body__shadow"
                fill="#111111"
                opacity="0.2"
              />
            </g>
            <Face
              mood={this.props.mood}
              transform="translate(22.000000, 81.000000)"
            />
          </g>
        </svg>
        {!this.props.showTextOnHover &&
          this.props.text &&
          <SpeechBuble
            color={this.props.color}
            size={this.props.size}
            text={this.props.text}
            rectangular={false}
          />}
        {this.props.showTextOnHover &&
          this.props.text &&
          this.state.hover &&
          <SpeechBuble
            color={this.props.color}
            size={this.props.size}
            text={this.props.text}
            rectangular={false}
          />}
      </div>
    );
  }
}

KawaiiIceCream.propTypes = {
  /**
  * Size of the width
  */
  size: React.PropTypes.number,
  mood: React.PropTypes.oneOf([
    "sad",
    "shocked",
    "happy",
    "blissful",
    "lovestruck"
  ]),
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
  showTextOnHover: React.PropTypes.bool
};

KawaiiIceCream.defaultProps = {
  size: 120,
  mood: "blissful",
  color: "#FDA7DC",
  showTextOnHover: true,
  text: null
};

export default KawaiiIceCream;
