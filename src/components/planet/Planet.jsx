import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';
import Face from '../common/face/Face';
import getUniqueId from '../../utils/getUniqueId';
import Wrapper from '../common/wrapper/Wrapper';

const Planet = ({ size, color, mood, className }) => (
  <Wrapper
    style={{ width: size, height: size }}
    width={size}
    height={size}
    color={color}
    className={className}
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
        <Face
          mood={mood}
          transform="translate(34 57)"
          uniqueId={getUniqueId()}
        />
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
   * Hex color
   */
  color: PropTypes.string
};

Planet.defaultProps = {
  size: 190,
  mood: 'blissful',
  color: '#FCCB7E'
};

export default Planet;
