import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';
import Face from '../common/face/Face';
import Wrapper from '../common/wrapper/Wrapper';

const Planet = ({ size, text, showTextOnHover, color, mood }) => (
  <Wrapper
    style={{ width: size, height: size }}
    showTextOnHover={showTextOnHover}
    text={text}
    width={size}
    height={size}
    color={color}
    speechBubbleTop={size / 3.5}
  >
    <svg
      width={size}
      height={size}
      version="1.1"
      viewBox="0 0 134 134"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path d={paths.shape} id="kawaii-planet__shape--path" />
        <path d={paths.shadow} id="kawaii-planet__shadow--path" />
      </defs>
      <g id="kawaii-planet">
        <g id="kawaii-planet__body">
          <mask id="mask-2" fill="#fff">
            <use xlinkHref="#kawaii-planet__shape--path" />
          </mask>
          <use
            id="kawaii-planet__shape"
            fill={color}
            xlinkHref="#kawaii-planet__shape--path"
          />
          <mask id="mask-4" fill="#fff">
            <use xlinkHref="#kawaii-planet__shadow--path" />
          </mask>
          <use
            id="kawaii-planet__shadow"
            fill="#000000"
            opacity=".1"
            xlinkHref="#kawaii-planet__shadow--path"
          />
        </g>
        <Face mood={mood} transform="translate(34 57)" />
      </g>
    </svg>
  </Wrapper>
);

Planet.propTypes = {
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

Planet.defaultProps = {
  size: 150,
  mood: 'blissful',
  color: '#FCCB7E',
  showTextOnHover: true,
  text: null,
};

export default Planet;
