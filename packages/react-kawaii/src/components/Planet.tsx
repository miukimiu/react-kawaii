import { FunctionComponent } from 'react';
import { DEFAULT_PROPS } from '../constants';
import { KawaiiProps } from '../types';
import { getFaceScale } from '../utils/getFaceScale';
import { Face } from './common/face';

export const Planet: FunctionComponent<KawaiiProps> = ({
  size = 240,
  mood = 'blissful',
  color = '#A6E191',
  ...props
} = DEFAULT_PROPS) => {
  const figmaFaceScale = getFaceScale(66);
  const figmaFaceXYPosition = '87 110';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 240 240" fill="none" {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M120 187c37.003 0 67-29.997 67-67s-29.997-67-67-67-67 29.997-67 67 29.997 67 67 67Z"
        clipRule="evenodd"
      />
      <path
        fill="#000"
        fillRule="evenodd"
        d="M114.5 186.777c1.814.148 3.648.223 5.5.223 37.003 0 67-29.997 67-67s-29.997-67-67-67c-1.852 0-3.686.075-5.5.222C148.93 56.02 176 84.85 176 120c0 35.151-27.07 63.98-61.5 66.777Z"
        clipRule="evenodd"
        opacity={0.1}
      />

      <Face mood={mood} transform={`translate(${figmaFaceXYPosition}) scale(${figmaFaceScale})`} />
    </svg>
  );
};
