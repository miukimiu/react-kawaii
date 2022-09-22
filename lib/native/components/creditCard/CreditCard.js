import React from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';
import paths from './paths';
import Face from '../common/face/Face';
import getUniqueId from '../../utils/getUniqueId';
import Wrapper from '../common/wrapper/Wrapper';

const CreditCard = ({ size, color, mood, className }) => (
  <Wrapper className={className}>
    <Svg
      width={size * 1.38}
      height={size}
      viewBox="0 0 198 143"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <G id="kawaii-creditCard">
        <G id="kawaii-creditCard__body" fillRule="nonzero">
          <Path d={paths.shape} id="kawaii-creditCard__shape" fill={color} />
          <Path
            d={paths.shadow}
            id="kawaii-creditCard__shadow"
            fill="#000"
            opacity=".1"
          />
          <Path
            id="kawaii-creditCard__stripe"
            fill="#000"
            d="M0 17h198v27H0z"
          />
        </G>
        <Face
          mood={mood}
          transform="translate(66 73)"
          uniqueId={getUniqueId()}
        />
      </G>
    </Svg>
  </Wrapper>
);

CreditCard.propTypes = {
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

CreditCard.defaultProps = {
  size: 200,
  mood: 'blissful',
  color: '#83D1FB'
};

export default CreditCard;
