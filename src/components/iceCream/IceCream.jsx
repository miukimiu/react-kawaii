import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';
import Face from '../common/face/Face';
import getUniqueId from '../../utils/getUniqueId';
import Wrapper from '../common/wrapper/Wrapper';

const IceCream = React.forwardRef(({ size, color, mood, className }, ref) => (
  <Wrapper
    style={{ width: size * 0.5, height: size }}
    width={size * 0.5}
    height={size}
    color={color}
    className={className}
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
        <Face
          mood={mood}
          transform="translate(22.000000, 81.000000)"
          uniqueId={getUniqueId()}
        />
      </g>
    </svg>
  </Wrapper>
));

IceCream.propTypes = {
  /**
   * Size of the width
   */
  size: PropTypes.number,
  mood: PropTypes.oneOf([
    'sad',
    'shocked',
    'happy',
    'blissful',
    'lovestruck',
    'excited'
  ]),
  /**
   * Hex color
   */
  color: PropTypes.string
};

IceCream.defaultProps = {
  size: 300,
  mood: 'blissful',
  color: '#FDA7DC'
};

export default IceCream;
