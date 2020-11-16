import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';
import Face from '../common/face/Face';
import getUniqueId from '../../utils/getUniqueId';
import Wrapper from '../common/wrapper/Wrapper';

const Folder = ({ size, color, mood, className }) => (
  <Wrapper className={className}>
    <svg
      width={size*1.25}
      height={size}
      viewBox="0 0 124 100"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="kawaii-folder"
        >
        <g id="kawaii-folder__body" fillRule="nonzero">
          <path d={paths.shape} id="kawaii-folder__shape" fill={color} />
          <path
            d={paths.shadow}
            id="kawaii-folder__shadow"
            fill="#000"
            opacity=".1"
          />
          <path
            id="kawaii-folder__top"
            d='M 0 25.74 L 0 26.73 C 0 16.5 5.94 12.87 11.22 13.035 L 19.14 13.035 C 17.82 13.035 55.11 12.87 55.77 13.035 C 54.45 11.55 49.6287 6.3393 47.6421 4.3329 C 45.2331 1.8975 44.8074 0.3366 41.25 0.33 C 41.25 0.33 16.83 0.33 16.83 0.33 C 11.5335 0.33 7.26 -0.33 3.3297 3.9732 C -0.4587 7.8639 0.33 12.54 0 16.5 Z'
            fill={color}
            opacity="0.6" 
          />        
          
        </g>
        <Face
          mood={mood}
          transform="translate(29 42)"
          uniqueId={getUniqueId()}
        />
      </g>
    </svg>
  </Wrapper>
);

Folder.propTypes = {
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

Folder.defaultProps = {
  size: 200,
  mood: 'excited',
  color: '#CB997E'
};

export default Folder;
