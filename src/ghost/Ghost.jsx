import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';
import Face from '../common/face/Face';
import Wrapper from '../common/wrapper/Wrapper';

const Ghost = ({ size, text, showTextOnHover, color, mood }) => (
  <Wrapper
    style={{ width: size * 0.77, height: size }}
    showTextOnHover={showTextOnHover}
    text={text}
    width={size * 0.77}
    height={size}
    color={color}
    speechBubbleTop={size / 3.5}
  >
    <svg
      width={size * 0.77}
      height={size}
      viewBox="0 0 130 168"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="kawaii-ghost">
        <g id="kawaii-ghost__body">
          <path d={paths.shape} id="kawaii-ghost__shape" fill={color} />
          <path
            d={paths.shadow}
            id="kawaii-ghost__shadow"
            fillOpacity=".1"
            fill="#000000"
          />
        </g>
        <Face mood={mood} transform="translate(34 57)" />
      </g>
    </svg>
  </Wrapper>
);

Ghost.propTypes = {
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

Ghost.defaultProps = {
  size: 240,
  mood: 'blissful',
  color: '#E0E4E8',
  showTextOnHover: true,
  text: null,
};

export default Ghost;
