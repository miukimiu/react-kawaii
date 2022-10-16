import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';
import getUniqueId from '../../utils/getUniqueId';
import Face from '../common/face/Face';
import Wrapper from '../common/wrapper/Wrapper';

const Dog = ({ size, color, mood, className }) => (
  <Wrapper className={className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size * 0.84}
      height={size}
      viewBox="0 0 185 220"
    >
      <g id="Kawaii-Builder" fill="none" fillRule="evenodd">
        <g id="kawaii-dog">
          <g
            id="kawaii-dog_tail"
            transform="translate(29.23 153.846)"
            fillRule="nonzero"
          >
            <path
              d="M45.487 29.59l3.18 5.077s-7.744 6.666-17.282 8.615C24.513 44.718.05 46.564.05 21.846s17.231-28.82 9.436-7.949c0 0-2.82 8.77.82 14.667 3.642 5.898 14.052 11.128 23.488 6.257l11.692-5.231z"
              id="tail_inner_shadow"
              fill={color}
            />
            <path
              d="M45.487 29.59l3.18 5.077s-7.744 6.666-17.282 8.615C24.513 44.718.05 46.564.05 21.846s17.231-28.82 9.436-7.949c0 0-2.82 8.77.82 14.667 3.642 5.898 14.052 11.128 23.488 6.257l11.692-5.231z"
              id="tail_inner"
              fill="#121212"
              opacity="0.25"
            />
          </g>
          <g
            id="kawaii-dog_legs"
            transform="translate(81 190)"
            fill={color}
            fillRule="nonzero"
          >
            <path d={paths.legs} id="kawaii-dog_legs_inner" />
          </g>
          <g
            id="kawaii-dog_arms"
            transform="translate(58 132)"
            fill={color}
            fillRule="nonzero"
          >
            <path d="M55.949.205s27.948 51.641 2 53.898" />
            <path d="M13.641.205s-27.949 51.641-2 53.898" />
          </g>
          <g
            id="kawaii-dog_arms-shadow"
            transform="translate(58 132)"
            fill="#121212"
            fillRule="nonzero"
            opacity="0.25"
          >
            <path d="M55.949.205s27.948 51.641 2 53.898" />
            <path d="M13.641.205s-27.949 51.641-2 53.898" />
          </g>
          <path
            d={paths.body}
            id="kawaii-dog_body"
            fill={color}
            fillRule="nonzero"
          />
          <g
            id="kawaii-dog_ears"
            transform="translate(34 23)"
            fill="#121212"
            fillRule="nonzero"
            opacity="0.25"
          >
            <path
              d="M103.795 2.897s18.718-8.974 13.077 8.975"
              id="kawaii-dog_ear-r"
            />
            <path
              d="M14.923 2.538S-3.795-6.436 1.846 11.513"
              id="kawaii-dog_ear-l"
            />
          </g>
          <path
            d="M92.243 190.282h.004v-48.667h-.004c7.075-.36 11.946-2.615 11.946-2.615 16.709 54.254-11.62 51.324-11.946 51.282-.376.042-28.705 2.972-11.945-51.282 0 0 4.869 2.255 11.942 2.615z"
            id="kawaii-dog_belly"
            fill="#121212"
            fillRule="nonzero"
            opacity="0.25"
          />
          <Face
            mood={mood}
            transform="translate(59 67)"
            uniqueId={getUniqueId()}
          />
          <path
            d="M96.935 77.625c-.975-2.106-8.13-2.227-8.889 0-.47 1.458 2.746 4.454 4.372 4.373 1.663-.121 5.095-3.118 4.517-4.373z"
            id="kawaii-dog_nose"
            fill="#121212"
            fillRule="nonzero"
          />
          <path
            d={paths.shadow}
            id="kawaii-dog_shadow"
            fill="#121212"
            fillRule="nonzero"
            opacity="0.1"
          />
        </g>
      </g>
    </svg>
  </Wrapper>
);

Dog.propTypes = {
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

Dog.defaultProps = {
  size: 320,
  mood: 'excited',
  color: '#596881'
};

export default Dog;
