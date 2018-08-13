import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';
import Face from '../common/face/Face';
import getUniqueId from '../../utils/getUniqueId';
import Wrapper from '../common/wrapper/Wrapper';

const CreditCard = ({ size, color, mood, className }) => (
  <Wrapper
    style={{ width: size * 1.38, height: size }}
    width={size * 1.38}
    height={size}
    color={color}
    className={className}
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
        <Face
          mood={mood}
          transform="translate(66 73)"
          uniqueId={getUniqueId()}
        />
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
   * Hex color
   */
  color: PropTypes.string
};

CreditCard.defaultProps = {
  size: 200,
  mood: 'blissful',
  color: '#83D1FB'
};

export default CreditCard;
