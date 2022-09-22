import React from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';
import paths from './paths';
import Face from '../common/face/Face';
import getUniqueId from '../../utils/getUniqueId';
import Wrapper from '../common/wrapper/Wrapper';

const IceCream = ({ size, color, mood, className }) => (
  <Wrapper className={className}>
    <Svg
      width={size * 0.5}
      height={size}
      viewBox="0 0 110 220"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <G id="kawaii-iceCream">
        <G fillRule="nonzero">
          <Path d={paths.stick} id="kawaii-iceCream__stick" fill="#FCCB7E" />
          <Path d={paths.shape} id="kawaii-iceCream__shape" fill={color} />
          <Path
            d={paths.shadow}
            id="kawaii-iceCream__shadow"
            fill="#000000"
            opacity=".1"
          />
        </G>
        <Face
          mood={mood}
          transform="translate(22.000000, 81.000000)"
          uniqueId={getUniqueId()}
        />
      </G>
    </Svg>
  </Wrapper>
);

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
    'excited',
    'ko'
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
