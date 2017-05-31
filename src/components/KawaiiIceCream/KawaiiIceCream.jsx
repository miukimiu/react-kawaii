import React from "react";
import paths from "./paths";
import Face from "../common/Face";
import KawaiiElementWrapper from "../common/KawaiiElementWrapper";

const KawaiiIceCream = props => (
  <KawaiiElementWrapper
    style={{ width: props.size, height: props.size * 1.83 }}
    showTextOnHover={props.showTextOnHover}
    text={props.text}
    width={props.size}
    height={props.size * 1.83}
    color={props.color}
  >
    <svg
      width={props.size}
      height={props.size * 1.83}
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
            fill={props.color}
          />
          <path
            d={paths.bodyShadow}
            id="kawaii-iceCream__body__shadow"
            fill="#111111"
            opacity="0.2"
          />
        </g>
        <Face mood={props.mood} transform="translate(22.000000, 81.000000)" />
      </g>
    </svg>
  </KawaiiElementWrapper>
);

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
