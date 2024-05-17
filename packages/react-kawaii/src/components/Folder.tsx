import { FunctionComponent } from 'react';
import { DEFAULT_PROPS } from '../constants';
import { KawaiiProps } from '../types';
import { getFaceScale } from '../utils/getFaceScale';
import { Face } from './common/face';

export const Folder: FunctionComponent<KawaiiProps> = ({
  size = 240,
  mood = 'blissful',
  color = '#A6E191',
  ...props
} = DEFAULT_PROPS) => {
  const figmaFaceScale = getFaceScale(66);
  const figmaFaceXYPosition = '87 110.66';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 240 240" fill="none" {...props}>
      <path
        fill={color}
        d="M69.88 82.612c-8.58-.036-11.55 6.564-11.55 12.834-.33 14.19-.33 60.72-.33 60.72 0 6.6 2.97 13.2 10.23 13.49h101.64c8.052.027 12.857-5.669 12.87-13.49v-45.87c0-5.28-.33-14.52-.33-14.52.33-6.6-4.29-12.87-13.53-13.2 0 0-64.35.036-64.35 0 0 0-22.44.036-22.44 0H69.88v.036Z"
      />
      <path
        fill="#000"
        d="M169.33 82.706c8 0 7 8 7 15v61c0 6-3 11-10 11 3 0 3.54-.05 3.54-.05 8.052.027 12.857-5.669 12.87-13.49v-45.87c0-5.28-.33-14.52-.33-14.52.33-6.6-4.29-12.87-13.08-13.07Z"
        opacity={0.1}
      />
      <path
        fill={color}
        d="M58.33 95.446v.99c0-10.23 5.94-13.86 11.22-13.695h7.92c-1.32 0 35.97-.165 36.63 0-1.32-1.485-6.141-6.696-8.128-8.702-2.409-2.436-2.835-3.996-6.392-4.003H75.16c-5.296 0-9.57-.66-13.5 3.643-3.79 3.89-3 8.567-3.33 12.527v9.24Z"
        opacity={0.6}
      />

      <Face mood={mood} transform={`translate(${figmaFaceXYPosition}) scale(${figmaFaceScale})`} />
    </svg>
  );
};
