import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';
import Face from '../common/face/Face';
import getUniqueId from '../../utils/getUniqueId';
import Wrapper from '../common/wrapper/Wrapper';

const SpeechBubble = React.forwardRef(
  ({ size, color, mood, className }, ref) => (
    <Wrapper classNames={className}>
      <svg
        width={size}
        height={size}
        version="1.1"
        viewBox="0 0 134 134"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <path d={paths.shape} id="kawaii-speechBubble__shape--path" />
          <path d={paths.shadow} id="kawaii-speechBubble__shadow--path" />
        </defs>
        <g id="Kawaii-speechBubble">
          <g id="Kawaii-speechBubble__body">
            <mask fill="#fff">
              <use xlinkHref="#kawaii-speechBubble__shape--path" />
            </mask>
            <use
              id="Kawaii-speechBubble__shape"
              fill={color}
              xlinkHref="#kawaii-speechBubble__shape--path"
            />
            <mask fill="#fff">
              <use xlinkHref="#kawaii-speechBubble__shadow--path" />
            </mask>
            <use
              id="Kawaii-speechBubble__shadow"
              fill="#000"
              opacity=".1"
              xlinkHref="#kawaii-speechBubble__shadow--path"
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
  )
);

SpeechBubble.propTypes = {
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
    'excited'
  ]),

  /**
   * Hex color
   */
  color: PropTypes.string
};

SpeechBubble.defaultProps = {
  size: 150,
  mood: 'blissful',
  color: '#83D1FB'
};

export default SpeechBubble;
