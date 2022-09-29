import React, { FunctionComponent } from 'react';
import paths from './paths';
import Face from '../common/face';
import getUniqueId from '../../utils/getUniqueId';

import { KawaiiProps } from '../../types';

const Planet: FunctionComponent<KawaiiProps> = ({
  size = 190,
  mood = 'blissful',
  color = '#FFD882',
  ...rest
}) => (
  <svg
    width={size}
    height={size}
    version="1.1"
    viewBox="0 0 134 134"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...rest}
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
      <Face mood={mood} transform="translate(34 57)" uniqueId={getUniqueId()} />
    </g>
  </svg>
);

export default Planet;
