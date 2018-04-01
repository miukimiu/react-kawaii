import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';
import Face from '../common/face/Face';
import Wrapper from '../common/wrapper/Wrapper';

const CreditCard = ({ size, text, showTextOnHover, color, mood }) => (
  <Wrapper
    style={{ width: size * 1.38, height: size }}
    showTextOnHover={showTextOnHover}
    text={text}
    width={size * 1.38}
    height={size}
    color={color}
    speechBubbleTop={size / 4}
  >
    <svg
      width={size * 1.38}
      height={size}
      viewBox="0 0 198 143"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="kawaii-creditCard">
        <g id="kawaii-creditCard__body" fillRule="nonzero">
          <path d={paths.shape} id="kawaii-creditCard__shape" fill={color} />
          <path
            d={paths.shadow}
            id="kawaii-creditCard__shadow"
            fill="#000"
            opacity=".1"
          />
          <path
            id="kawaii-creditCard__stripe"
            fill="#000"
            d="M0 17h198v27H0z"
          />
        </g>
        <Face mood={mood} transform="translate(66 73)" />
      </g>
    </svg>
  </Wrapper>
);

CreditCard.propTypes = {
  /**
   * Size of the width
   * */
  size: PropTypes.number,
  mood: PropTypes.oneOf(['sad', 'shocked', 'happy', 'blissful', 'lovestruck']),
  /**
   * Set the text to show on the speech bubble
   */
  text: PropTypes.string,
  /**
   * Set as true to show the speech bubble on hover, as false to show text by default
   */
  showTextOnHover: PropTypes.bool,
  /**
   * Hex color
   */
  color: PropTypes.string,
};

CreditCard.defaultProps = {
  size: 200,
  mood: 'blissful',
  color: '#83D1FB',
  showTextOnHover: true,
  text: null,
};

export default CreditCard;
