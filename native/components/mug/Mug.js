import React from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';
import paths from './paths';
import Face from '../common/face/Face';
import getUniqueId from '../../utils/getUniqueId';
import Wrapper from '../common/wrapper/Wrapper';

const Mug = ({ size, color, mood, className }) => (
  <Wrapper className={className}>
    <Svg
      width={size * 1.5}
      height={size}
      viewBox="0 0 172 115"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <G id="kawaii-mug">
        <G id="kawaii-mug__body" fillRule="nonzero">
          <Path d={paths.shape} id="kawaii-mug__shape" fill={color} />
          <Path
            d={paths.shadow}
            id="kawaii-mug__shadow"
            fill="#000"
            opacity=".1"
          />
        </G>
        <Face
          mood={mood}
          transform="translate(71 42)"
          uniqueId={getUniqueId()}
        />
      </G>
    </Svg>
  </Wrapper>
);

Mug.propTypes = {
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

  color: PropTypes.string
};

Mug.defaultProps = {
  size: 170,
  mood: 'blissful',
  color: '#A6E191'
};

export default Mug;
