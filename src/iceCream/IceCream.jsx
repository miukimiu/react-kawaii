import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';
import Face from '../common/face/Face';
import KawaiiWrapper from '../common/wrapper/KawaiiWrapper';

const IceCream = ({ size, text, showTextOnHover, color, mood }) => (
  <KawaiiWrapper
    style={{ width: size * 0.5, height: size }}
    showTextOnHover={showTextOnHover}
    text={text}
    width={size * 0.5}
    height={size}
    color={color}
  >
    <svg
      width={size * 0.5}
      height={size}
      viewBox="0 0 110 220"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="kawaii-iceCream">
        <g fillRule="nonzero">
          <path d={paths.stick} id="kawaii-iceCream__stick" fill="#FCCB7E" />
          <path d={paths.shape} id="kawaii-iceCream__shape" fill={color} />
          <path
            d={paths.shadow}
            id="kawaii-iceCream__shadow"
            fill="#000000"
            opacity=".1"
          />
        </g>
        <Face mood={mood} transform="translate(22.000000, 81.000000)" />
      </g>
    </svg>
  </KawaiiWrapper>
);

IceCream.propTypes = {
  /**
   * Size of the width
   */
  size: PropTypes.number,
  mood: PropTypes.oneOf(['sad', 'shocked', 'happy', 'blissful', 'lovestruck']),
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
};

IceCream.defaultProps = {
  size: 300,
  mood: 'blissful',
  color: '#FDA7DC',
  showTextOnHover: true,
  text: null,
};

export default IceCream;
