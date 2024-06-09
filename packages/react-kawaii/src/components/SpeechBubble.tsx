import { FunctionComponent } from 'react';
import { DEFAULT_PROPS } from '../constants';
import { KawaiiProps } from '../types';
import { getFaceScale } from '../utils/getFaceScale';
import { Face } from './common/face';

export const SpeechBubble: FunctionComponent<KawaiiProps> = ({
  size = 240,
  mood = 'blissful',
  color = '#A6E191',
  ...props
} = DEFAULT_PROPS) => {
  const figmaFaceScale = getFaceScale(56.77);
  const figmaFaceXYPosition = '91.61 108.57';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 240 240" fill="none" {...props}>
      <path
        fill={color}
        d="M199.986 85.631c-.002-9.147-8.202-16.633-18.227-16.631l-123.536.004C48.2 69.004 40 76.49 40 85.637v67.402l.044-.007c.323 2.659 2.835 16.71 19.816 16.71h30.48l-.084 18.618s.069 1.555.417 1.998c.348.444 1.225 1.523 3.203 1.623 1.978.1 2.01-.228 2.36-.267.35-.038 5.519-3.611 5.519-3.611l25.756-18.361s51.382.524 54.821 0c6.621-1.009 17.654-3.025 17.654-17.142V85.632Z"
      />
      <path
        fill="#121212"
        d="M182.364 169.191c6.608-1.003 17.622-3.009 17.622-17.048V85.54c-.002-9.097-8.188-16.542-18.195-16.54h-8.341c9.958.052 18.084 7.476 18.086 16.54v66.603c0 14.039-11.014 16.045-17.622 17.048-2.012.305-12.396.424-26.397.443 18.144.02 32.448-.079 34.847-.443Z"
        opacity={0.07}
      />

      <Face mood={mood} transform={`translate(${figmaFaceXYPosition}) scale(${figmaFaceScale})`} />
    </svg>
  );
};
