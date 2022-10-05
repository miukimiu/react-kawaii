import React, { FunctionComponent } from 'react';
import paths from './paths';
import Face from '../common/face';
import getUniqueId from '../../utils/getUniqueId';
import { KawaiiProps } from '../../types';

const SpeechBubble: FunctionComponent<KawaiiProps> = ({
  size = 220,
  mood = 'blissful',
  color = '#FFD882',
  ...rest
}) => (
  <svg
    width={size * 1.3}
    height={size}
    viewBox="0 0 186 143"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...rest}
  >
    <g id="Kawaii-Builder" fill="none" fillRule="evenodd">
      <g id="Kawaii-speechBubble" transform="translate(-27 -57)">
        <g id="kawaii-speechBubble" transform="translate(27 57)">
          <path
            d={paths.body}
            id="kawaii-speechBubble_body"
            fill={color}
            fillRule="nonzero"
          />
          <path
            d={paths.shadow}
            id="kawaii-speechBubble_shadow"
            fill="#121212"
            fillRule="nonzero"
            opacity="0.07"
          />
          <Face
            mood={mood}
            transform="translate(60 46)"
            uniqueId={getUniqueId()}
          />
        </g>
      </g>
    </g>
  </svg>
);

export default SpeechBubble;
