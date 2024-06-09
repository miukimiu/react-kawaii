import { FunctionComponent } from 'react';
import { DEFAULT_PROPS } from '../constants';
import { KawaiiProps } from '../types';
import { getFaceScale } from '../utils/getFaceScale';
import { Face } from './common/face';

export const CreditCard: FunctionComponent<KawaiiProps> = ({
  size = 240,
  mood = 'blissful',
  color = '#A6E191',
  ...props
} = DEFAULT_PROPS) => {
  const figmaFaceScale = getFaceScale(54.33);
  const figmaFaceXYPosition = '93.33 121.1';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 240 240" fill="none" {...props}>
      <path
        fill={color}
        d="M192.959 178.722H48.041c-4.994 0-9.041-4.036-9.041-9.017V70.017C39 65.037 43.047 61 48.04 61h144.92c4.994 0 9.041 4.036 9.041 9.017v99.688c0 4.981-4.047 9.017-9.041 9.017"
      />
      <path
        fill="#000"
        fillRule="evenodd"
        d="M183.904 178.722h9.055c4.994 0 9.041-4.036 9.041-9.017V70.017c0-4.98-4.047-9.017-9.041-9.017h-9.055c4.994 0 9.04 4.036 9.04 9.017v99.688c0 4.981-4.046 9.017-9.04 9.017Z"
        clipRule="evenodd"
        opacity={0.1}
      />
      <path fill="#000" d="M39 74.995h163v22.227H39V74.995Z" />

      <Face mood={mood} transform={`translate(${figmaFaceXYPosition}) scale(${figmaFaceScale})`} />
    </svg>
  );
};
