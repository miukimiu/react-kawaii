import React, { FunctionComponent } from 'react';
import paths from './paths';
import getUniqueId from '../../utils/getUniqueId';
import Face from '../common/face';
import Wrapper from '../common/wrapper';
import { KawaiiProps } from '../../types';

const Ghost: FunctionComponent<KawaiiProps> = ({
  size = 240,
  mood = 'blissful',
  color = '#E0E4E8',
  ...rest
}) => (
  <Wrapper {...rest}>
    <svg
      width={size * 0.77}
      height={size}
      viewBox="0 0 130 168"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="kawaii-ghost">
        <g id="kawaii-ghost__body">
          <path d={paths.shape} id="kawaii-ghost__shape" fill={color} />
          <path
            d={paths.shadow}
            id="kawaii-ghost__shadow"
            fillOpacity=".1"
            fill="#000000"
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

export default Ghost;
