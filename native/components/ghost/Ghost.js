import React from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';
import paths from './paths';
import getUniqueId from '../../utils/getUniqueId';
import Face from '../common/face/Face';
import Wrapper from '../common/wrapper/Wrapper';

const Ghost = ({ size, color, mood, className }) => (
  <Wrapper className={className}>
    <Svg
      width={size * 0.77}
      height={size}
      viewBox="0 0 130 168"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <G id="kawaii-ghost">
        <G id="kawaii-ghost__body">
          <Path d={paths.shape} id="kawaii-ghost__shape" fill={color} />
          <Path
            d={paths.shadow}
            id="kawaii-ghost__shadow"
            fillOpacity=".1"
            fill="#000000"
          />
        </G>
        <Face
          mood={mood}
          transform="translate(34 57)"
          uniqueId={getUniqueId()}
        />
      </G>
    </Svg>
  </Wrapper>
);

Ghost.propTypes = {
  /**
   * Size of the width
   * */
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

Ghost.defaultProps = {
  size: 240,
  mood: 'blissful',
  color: '#E0E4E8'
};

export default Ghost;
