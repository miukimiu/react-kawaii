import React, { Component } from "react";
import paths from "./paths";
import SpeechBuble from "../SpeechBubble";
import "./style.scss";

class KawaiiPlanet extends Component {
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
        style={{ width: this.props.size, height: this.props.size }}
        className="kawaiiElementWrapper"
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOver}
      >
        <svg
          width={this.props.size}
          height={this.props.size}
          viewBox="114 94 151 150"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <path d={paths.path1} id="kawaii-planet__path-1" />
            <path d={paths.path2} id="kawaii-planet__path-3" />
            <path d={paths.path3} id="kawaii-planet__path-5" />
          </defs>
          <g
            id="kawaii-planet"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            transform="translate(115.000000, 94.000000)"
          >
            <g
              id="kawaii-planet__body-color"
              transform="translate(8.000000, 8.000000)"
            >
              <mask id="kawaii-planet__mask-2" fill="white">
                <use xlinkHref="#kawaii-planet__path-1" />
              </mask>
              <use
                id="kp-body-color-"
                fill={this.props.color}
                xlinkHref="#kawaii-planet__path-1"
              />
              <mask id="kawaii-planet__mask-4" fill="white">
                <use xlinkHref="#kawaii-planet__path-3" />
              </mask>
              <use
                id="kp-body-color-darker"
                fill="#111111"
                opacity="0.233908582"
                xlinkHref="#kawaii-planet__path-3"
              />
            </g>
            <g
              id="kawaii-planet__face"
              transform="translate(42.000000, 65.000000)"
            >
              <g
                id="kawaii-planet__mouth"
                transform="translate(18.000000, 16.000000)"
              >
                {(this.props.mood === "blissful" ||
                  this.props.mood === "lovestruck") &&
                  <g
                    id="kp-mouth__joy"
                    transform="translate(0.000000, 1.000000)"
                  >
                    <mask id="kawaii-planet__mask-6" fill="white">
                      <use xlinkHref="#kawaii-planet__path-5" />
                    </mask>
                    <use
                      id="Combined-Shape"
                      fill="#000000"
                      xlinkHref="#kawaii-planet__path-5"
                    />
                    <path
                      d={paths.tongue}
                      id="kawaii-planet__tongue"
                      fill="#E74144"
                      mask="url(#kawaii-planet__mask-6)"
                      transform="translate(15.000000, 11.431885) scale(1, -1)
                              translate(-15.000000, -11.431885) "
                    />
                  </g>}
                {this.props.mood === "happy" &&
                  <path
                    d={paths.happy}
                    id="kp-mouth__happy"
                    stroke="none"
                    fill="#000000"
                    fillRule="evenodd"
                  />}
                {this.props.mood === "shocked" &&
                  <circle
                    id="kp-mouth__shocked"
                    stroke="none"
                    fill="#000000"
                    fillRule="evenodd"
                    cx="15.5"
                    cy="14.5"
                    r="7.5"
                  />}
                {this.props.mood === "sad" &&
                  <path
                    d={paths.sad}
                    id="kp-mouth__sad"
                    stroke="none"
                    fill="#000000"
                    fillRule="evenodd"
                    transform="translate(14.999999, 5.500000)
                        scale(1, -1) translate(-14.999999, -5.500000)"
                  />}
              </g>
              <g
                id="kawaii-planet__blush"
                transform="translate(0.000000, 15.000000)"
                fill="#000000"
                opacity="0.2"
              >
                <circle id="Oval" cx="3" cy="3" r="3" />
                <circle id="Oval" cx="63" cy="3" r="3" />
              </g>
              <g
                id="kawaii-planet__eyes"
                transform="translate(2.000000, 0.000000)"
                fill="#000000"
              >
                {this.props.mood === "blissful" &&
                  <g
                    id="kp-eyes__arc"
                    transform="translate(1.000000, 0.000000)"
                  >
                    <path d={paths.bliss1} id="Fill-5" />
                    <path d={paths.bliss2} id="Fill-5" />
                  </g>}
                {(this.props.mood === "happy" || this.props.mood === "sad") &&
                  <g
                    id="kp-eyes__circle"
                    transform="translate(3.000000, 2.000000)"
                    fill="#000000"
                  >
                    <circle id="Oval-3" cx="4.5" cy="4.5" r="4.5" />
                    <circle id="Oval-3" cx="51.5" cy="4.5" r="4.5" />
                  </g>}
                {this.props.mood === "lovestruck" &&
                  <g
                    id="kp-eyes__heart"
                    transform="translate(0.000000, 2.000000)"
                    fillRule="nonzero"
                    fill="#000000"
                  >
                    <path d={paths.love1} id="Shape" />
                    <path d={paths.love2} id="Shape" />
                  </g>}
                {this.props.mood === "shocked" &&
                  <g
                    id="kp-eyes__cross"
                    transform="translate(3.000000, 0.000000)"
                    fill="#000000"
                  >
                    <path d={paths.shocked1} id="Combined-Shape" />
                    <path d={paths.shocked2} id="Combined-Shape" />
                  </g>}
              </g>
            </g>
          </g>
        </svg>
        {this.state.hover &&
          this.props.hoverText &&
          <SpeechBuble
            classNames="planetSpeech"
            color={this.props.color}
            size={this.props.size}
            hoverText={this.props.hoverText}
          />}
      </div>
    );
  }
}

KawaiiPlanet.propTypes = {
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
   * Set the text to show on the speech bubble on hover
   */
  hoverText: React.PropTypes.string,
  /**
    * Hex color
    */
  color: React.PropTypes.string
};

KawaiiPlanet.defaultProps = {
  size: 150,
  mood: "blissful",
  color: "#83D1FB",
  hoverText: null
};

export default KawaiiPlanet;
