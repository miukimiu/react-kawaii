import React, { FunctionComponent } from 'react';
import paths from './paths';
import Face from '../common/face';
import getUniqueId from '../../utils/getUniqueId';
import Wrapper from '../common/wrapper';
import { KawaiiProps } from '../../types';

const Mug: FunctionComponent<KawaiiProps> = ({
  size = 170,
  mood = 'blissful',
  color = '#FFD882',
  ...rest
}) => (
  <Wrapper {...rest}>
    <svg
      width={size * 1.5}
      height={size}
      viewBox="0 0 172 115"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="kawaii-mug">
        <g id="kawaii-mug__body" fillRule="nonzero">
          <path d={paths.shape} id="kawaii-mug__shape" fill={color} />
          <path
            d={paths.shadow}
            id="kawaii-mug__shadow"
            fill="#000"
            opacity=".1"
          />
        </g>
        <Face
          mood={mood}
          transform="translate(71 42)"
          uniqueId={getUniqueId()}
        />
      </g>
    </svg>
  </Wrapper>
);

export default Mug;
