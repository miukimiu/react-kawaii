import { FunctionComponent } from 'react';
import { DEFAULT_PROPS } from '../constants';
import { KawaiiProps } from '../types';
import { getFaceScale } from '../utils/getFaceScale';
import { Face } from './common/face';

export const Mug: FunctionComponent<KawaiiProps> = ({
  size = 240,
  mood = 'blissful',
  color = '#A6E191',
  ...props
} = DEFAULT_PROPS) => {
  const figmaFaceScale = getFaceScale(53.95);
  const figmaFaceXYPosition = '93.03 107.33';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 240 240" fill="none" {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M66.953 91.194H49.379C41.45 91.194 35 97.314 35 104.839c0 17.795 14.127 32.491 32.29 34.588C69.498 154.968 83.53 167 100.503 167h41.538c18.501 0 33.55-14.283 33.55-31.839V77.548c0-2.512-2.146-4.548-4.793-4.548H71.746c-2.646 0-4.793 2.036-4.793 4.548v13.646Zm-.713 9.096v29.896c-12.694-2.157-22.367-12.689-22.367-25.347 0-2.508 2.15-4.549 4.793-4.549H66.24Z"
        clipRule="evenodd"
      />
      <path
        fill="#000"
        fillRule="evenodd"
        d="M121.643 73h-.086v94h.086V73Zm42.338 0c2.301 0 4.168 2.036 4.168 4.548v57.613c0 17.556-13.087 31.839-29.175 31.839h2.837c18.627 0 33.78-14.283 33.78-31.839V77.548c0-2.512-2.161-4.548-4.826-4.548h-6.784Z"
        clipRule="evenodd"
        opacity={0.1}
      />

      <Face mood={mood} transform={`translate(${figmaFaceXYPosition}) scale(${figmaFaceScale})`} />
    </svg>
  );
};
