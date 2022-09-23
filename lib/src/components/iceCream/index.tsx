import React, { FunctionComponent } from 'react';
import paths from './paths';
import Face from '../common/face';
import getUniqueId from '../../utils/getUniqueId';
import Wrapper from '../common/wrapper';
import { KawaiiProps } from '../../types';

const IceCream: FunctionComponent<KawaiiProps> = ({
  size = 300,
  mood = 'blissful',
  color = '#FDA7DC',
  ...rest
}) => (
  <Wrapper {...rest}>
    <svg
      width={size * 0.5}
      height={size}
      viewBox="0 0 110 220"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="kawaii-iceCream">
        <g fillRule="nonzero">
          <path d={paths.stick} id="kawaii-iceCream__stick" fill="#FCCB7E" />
          <path d={paths.shape} id="kawaii-iceCream__shape" fill={color} />
          <path
            d={paths.shadow}
            id="kawaii-iceCream__shadow"
            fill="#000000"
            opacity=".1"
          />
        </g>
        <Face
          mood={mood}
          transform="translate(22.000000, 81.000000)"
          uniqueId={getUniqueId()}
        />
      </g>
    </svg>
  </Wrapper>
);

export default IceCream;
