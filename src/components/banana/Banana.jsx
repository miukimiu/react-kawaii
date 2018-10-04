import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';
import Face from '../common/face/Face';
import getUniqueId from '../../utils/getUniqueId';
import Wrapper from '../common/wrapper/Wrapper';

const Banana = ({ size, color, mood, className }) => (
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
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path d={paths.shape} id="kawaii-banana__shape--path" />
        <path d={paths.shadow} id="kawaii-banana__shadow--path" />
      </defs>
      <g id="kawaii-banana">
        <g id="kawaii-banana__body">
          <mask id="mask-2" fill="#fff">
            <use xlinkHref="#kawaii-banana__shape--path" />
          </mask>
          <use
            id="kawaii-banana__shape"
            fill={color}
            xlinkHref="#kawaii-banana__shape--path"
          />
          <mask id="mask-4" fill="#fff">
            <use xlinkHref="#kawaii-banana__shadow--path" />
          </mask>
          <use
            id="kawaii-banana__shadow"
            fill="#000000"
            opacity=".1"
            xlinkHref="#kawaii-banana__shadow--path"
          />
        </g>
        <Face
          mood={mood}
          transform="translate(145 140), rotate(20)"
          uniqueId={getUniqueId()}
        />
      </g>
    </svg>
  </Wrapper>
);

Banana.propTypes = {
  /**
   * Size of the width
   * */
  size: PropTypes.number,
  mood: PropTypes.oneOf(['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited']),
  /**
   * Hex color
   */
  color: PropTypes.string
};

Banana.defaultProps = {
  size: 200,
  mood: 'excited',
  color: '#FFD600'
};

export default Banana;
