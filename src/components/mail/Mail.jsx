import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';
import Face from '../common/face/Face';
import getUniqueId from '../../utils/getUniqueId';
import Wrapper from '../common/wrapper/Wrapper';

const Mail = ({ size, color, mood, className }) => (
  <Wrapper className={className}>
    <svg
      width={size * 1.33}
      height={size}
      viewBox="0 0 200 150"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="kawaii-mail" transform="translate(-20.000000, -45.000000)">
        <g transform="translate(20.000000, 45.000000)">
          <g id="kawaii-mail__body">
            <rect
              id="kawaii-mail__inner"
              fill={color}
              x="0"
              y="0"
              width="200"
              height="150"
              rx="5"
            />
            <rect
              id="kawaii-mail__inner-shadow"
              fill="#000000"
              opacity="0.05"
              x="0"
              y="0"
              width="200"
              height="150"
              rx="5"
            />
            <path
              d={paths.lowerfold}
              id="kawaii-mail__lowerfold"
              fill={color}
            />
            <path
              d={paths.upperfoldShadow}
              id="kawaii-mail__upperfold-shadow"
              opacity="0.05"
              fill="#000000"
            />
            <path
              d={paths.upperfold}
              id="kawaii-mail__upperfold"
              fill={color}
            />
            <path
              d={paths.shadow}
              id="kawaii-mail__shadow"
              fill="#000000"
              opacity="0.05"
            />
          </g>
          <Face
            mood={mood}
            transform="translate(67.000000, 21.000000)"
            uniqueId={getUniqueId()}
          />
        </g>
      </g>
    </svg>
  </Wrapper>
);

Mail.propTypes = {
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

Mail.defaultProps = {
  size: 220,
  mood: 'lovestruck',
  color: '#F8D946'
};

export default Mail;
