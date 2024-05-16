import { FunctionComponent } from 'react';
import getUniqueId from '../utils/getUniqueId';
import { KawaiiProps } from '../types';
import { DEFAULT_PROPS } from '../constants';
import Face from './common/face';
import { getFaceScale } from '../utils/getFaceScale';

const Browser: FunctionComponent<KawaiiProps> = ({
  size = 240,
  mood = 'blissful',
  color = '#A6E191',
  ...props
} = DEFAULT_PROPS) => {
  const figmaFaceScale = getFaceScale(52.78);
  const figmaFaceXYPosition = '93.58 115.38';

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
        d="M199.67 122.166V83.164c-.002-9.99-8.186-18.166-18.191-18.164l-123.292.004C48.184 65.004 40 73.18 40 83.17v73.614l.044-.008c.322 2.904 2.829 18.249 19.777 18.249 18.72 0 115.623 1.102 122.23 0 6.608-1.101 17.619-3.303 17.619-18.721v-34.138Z"
      />
      <path
        fill="#121212"
        d="M182.131 175.025c6.607-1.101 17.619-3.303 17.619-18.721v-73.14c-.002-9.99-8.186-18.166-18.192-18.164h-8.339c9.956.057 18.081 8.21 18.083 18.164v73.14c0 15.418-11.012 17.62-17.619 18.721-2.012.336-12.394.467-26.391.487 18.14.023 32.44-.087 34.839-.487Z"
        opacity={0.1}
      />
      <path
        fill="#111"
        d="M40.078 83.164c0-9.984 8.18-18.16 18.18-18.16L181.51 65c10.002-.002 18.183 8.173 18.185 18.164"
      />
      <path
        fill="#fff"
        d="M175.121 76.433a2.717 2.717 0 0 0 2.719-2.715c0-1.5-1.217-2.716-2.719-2.716a2.718 2.718 0 0 0-2.719 2.716c0 1.5 1.218 2.715 2.719 2.715Zm8.973 0a2.718 2.718 0 0 0 2.719-2.715c0-1.5-1.218-2.716-2.719-2.716a2.717 2.717 0 0 0-2.719 2.716c0 1.5 1.217 2.715 2.719 2.715Z"
      />
      <rect
        width={116.585}
        height={8.448}
        x={50.419}
        y={69.506}
        fill="#fff"
        rx={4.224}
      />
      <mask
        id="Browser_svg__a"
        width={25}
        height={15}
        x={107}
        y={128}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'luminance'
        }}
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M108.909 135.649c-.584-1.303-.929-2.707-.929-4.152 0-.662.276-1.311.759-1.779a2.653 2.653 0 0 1 1.835-.737h18.161c.684 0 1.351.268 1.835.737.483.468.76 1.117.76 1.779-.006 2.168-.765 4.24-1.987 6.026a12.5 12.5 0 0 1-5.045 4.272 11.124 11.124 0 0 1-4.643 1.028c-2.505 0-4.787-.867-6.613-2.17a12.5 12.5 0 0 1-4.133-5.004Z"
          clipRule="evenodd"
        />
      </mask>

      <Face
        mood={mood}
        transform={`translate(${figmaFaceXYPosition}) scale(${figmaFaceScale})`}
      />
    </svg>
  );
};

export default Browser;
