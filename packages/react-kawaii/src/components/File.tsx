import { FunctionComponent } from 'react';
import getUniqueId from '../utils/getUniqueId';
import { KawaiiProps } from '../types';
import { DEFAULT_PROPS } from '../constants';
import Face from './common/face';
import { getFaceScale } from '../utils/getFaceScale';

const File: FunctionComponent<KawaiiProps> = ({
  size = 240,
  mood = 'blissful',
  color = '#A6E191',
  ...props
} = DEFAULT_PROPS) => {
  const figmaFaceScale = getFaceScale(66);
  const figmaFaceXYPosition = '87 110.66';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      {...props}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M85.599 51C78.64 51 73 56.64 73 63.599v113.1c0 6.958 5.641 12.599 12.599 12.599h68.81c6.957 0 12.598-5.641 12.598-12.599V83.151c0-.413-.164-.809-.456-1.1l-30.594-30.595"
        clipRule="evenodd"
      />
      <path
        fill="#000"
        fillRule="evenodd"
        d="M135.501 51v20.465c0 6.098 4.943 11.04 11.041 11.04h20.464L135.501 51"
        clipRule="evenodd"
        opacity={0.2}
      />
      <path
        fill="#000"
        fillRule="evenodd"
        d="M167.007 82.506h-8.177c.006.301.023.6.023.903v93.231c0 6.986-5.723 12.648-12.784 12.648h8.217c7.061 0 12.784-5.662 12.784-12.648V83.41c0-.302-.004-.603-.01-.904h-.053Z"
        clipRule="evenodd"
        opacity={0.104}
      />

      <Face
        mood={mood}
        transform={`translate(${figmaFaceXYPosition}) scale(${figmaFaceScale})`}
      />
    </svg>
  );
};

export default File;
