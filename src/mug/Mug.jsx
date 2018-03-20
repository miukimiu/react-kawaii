import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';
import Face from '../common/face/Face';
import KawaiiWrapper from '../common/wrapper/KawaiiWrapper';
import * as Constants from '../constants';

const { KAWAII_MOODS } = Constants;

const Mug = ({ size, text, showTextOnHover, color, mood }) => (
  <KawaiiWrapper
    style={{ width: size * 1.5, height: size }}
    showTextOnHover={showTextOnHover}
    text={text}
    width={size * 1.5}
    height={size}
    color={color}
  >
    <svg
      width={size * 1.5}
      height={size}
      viewBox="0 0 172 115"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="kawaii-mug">
        <g id="kawaii-mug__body" fillRule="nonzero">
          <path d={paths.shape} id="kawaii-mug__shape" fill={color} />
          <path
            d={paths.shadow}
            id="kawaii-mug__shadow"
            fill="#000"
            opacity=".1"
          />
        </g>
        <Face mood={mood} transform="translate(71 42)" />
      </g>
    </svg>
  </KawaiiWrapper>
);

Mug.propTypes = {
  /**
   * Size of the width
   * */
  size: PropTypes.number,
  mood: PropTypes.oneOf([KAWAII_MOODS]),
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

Mug.defaultProps = {
  size: 170,
  mood: 'blissful',
  color: '#A6E191',
  showTextOnHover: true,
  text: null,
};

export default Mug;
