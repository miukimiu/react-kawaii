import { FunctionComponent } from 'react';
import getUniqueId from '../utils/getUniqueId';
import { KawaiiProps } from '../types';
import { DEFAULT_PROPS } from '../constants';
import Face from './common/face';
import { getFaceScale } from '../utils/getFaceScale';

const Backpack: FunctionComponent<KawaiiProps> = ({
  size = 240,
  mood = 'blissful',
  color = '#A6E191',
  ...props
} = DEFAULT_PROPS) => {
  const figmaFaceScale = getFaceScale(50.73);
  const figmaFaceXYPosition = '94.67 106.5';

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
        d="M163.776 49.844v33.53l-10.668-11.371 10.668-22.159Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        d="M163.776 49.844v33.53l-10.668-11.371 10.668-22.159Z"
        opacity={0.4}
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="m156.71 71.943 7.066-22.73-16.152-3.94-5.946 18.967 15.032 7.703ZM76.144 49.844v33.53l10.668-11.371-10.668-22.159Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        d="M76.144 49.844v33.53l10.668-11.371-10.668-22.159Z"
        opacity={0.4}
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="m83.21 71.943-7.066-22.73 16.153-3.94 5.946 18.967-15.032 7.703Zm33.321-30.609h7.62L120.341 36l-3.81 5.334Z"
        clipRule="evenodd"
      />
      <path
        fill="#121212"
        d="M116.531 41.334h7.62L120.341 36l-3.81 5.334Z"
        opacity={0.14}
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M113.442 61.275h-9.865s3.561-11.134 6.348-15.126c.918-1.316 2.129-2.318 3.251-3.246.704-.583 1.374-1.137 1.915-1.722.772-.834 1.446-1.612 2.039-2.295 1.437-1.658 2.391-2.758 3.083-2.758.305 0 .038.337-.509 1.027-.997 1.258-2.926 3.69-4.019 7.397-1.2 4.07-2.243 16.723-2.243 16.723Zm13.81.762h9.854s-3.557-11.38-6.341-15.461c-.918-1.346-2.127-2.37-3.248-3.318-.703-.596-1.372-1.162-1.913-1.76a71.211 71.211 0 0 1-2.294-2.698c-1.302-1.588-2.191-2.672-2.841-2.672-.311 0-.024.386.549 1.156 1.011 1.358 2.913 3.914 3.993 7.66 1.199 4.16 2.241 17.093 2.241 17.093Z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M119.96 55.698c29.39 0 52.961 26.34 52.961 58.833v71.645c0 10.834-7.905 16.591-17.654 16.591H84.653c-9.75 0-17.653-5.757-17.653-16.591v-71.645c0-32.493 23.57-58.833 52.96-58.833Z"
        clipRule="evenodd"
      />
      <path
        fill="#121212"
        d="M172.921 176.339v10.28c0 10.703-7.905 16.391-17.654 16.391H84.653c-9.75 0-17.653-5.688-17.653-16.391v-10.28h105.921Z"
        opacity={0.07}
      />

      <mask
        id="Backpack_svg__a"
        width={23}
        height={14}
        x={108}
        y={122}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'luminance'
        }}
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M109.402 128.981c-.562-1.252-.893-2.602-.894-3.99 0-.637.266-1.26.73-1.71a2.55 2.55 0 0 1 1.764-.709h17.455c.657 0 1.298.258 1.763.709.465.45.731 1.073.731 1.71-.006 2.083-.735 4.075-1.91 5.791a12.004 12.004 0 0 1-4.849 4.106 10.693 10.693 0 0 1-4.463.988c-2.407 0-4.6-.833-6.355-2.085a12.014 12.014 0 0 1-3.972-4.81Z"
          clipRule="evenodd"
        />
      </mask>
      <path
        fill="#121212"
        fillRule="evenodd"
        d="M172.921 114.482c0-32.325-23.571-58.528-52.961-58.528-29.39 0-52.96 26.203-52.96 58.528v4.572c0-32.325 23.57-58.528 52.96-58.528s52.961 26.203 52.961 58.528v-4.572Z"
        clipRule="evenodd"
        opacity={0.07}
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M85.614 139.763h69.608c8.554 0 8.554 5.852 8.554 5.852v38.301s0 6.14-7.749 6.14H85.68c-9.771 0-8.66-5.997-8.66-5.997v-38.714s0-5.582 8.594-5.582Z"
        clipRule="evenodd"
      />
      <path
        fill="#121212"
        d="M85.614 139.763h69.608c8.554 0 8.554 5.852 8.554 5.852v38.301s0 6.14-7.749 6.14H85.68c-9.771 0-8.66-5.997-8.66-5.997v-38.714s0-5.582 8.594-5.582Z"
        opacity={0.14}
      />
      <path
        fill="#33363B"
        d="M76.906 154.241h86.87v2.286h-86.87z"
        opacity={0.408}
      />
      <path
        fill="#555D67"
        d="M76.906 151.955h86.87v2.286h-86.87z"
        opacity={0.408}
      />
      <path
        fill="#6D727A"
        d="M159.204 151.955h4.572v4.572h-4.572z"
        opacity={0.587}
      />
      <path
        fill="#49505A"
        fillRule="evenodd"
        d="M162.469 153.479h-1.559l-.307 6.858h2.286l-.42-6.858Zm-.342 5.334h-.762v.762h.762v-.762Z"
        clipRule="evenodd"
        opacity={0.746}
      />
      <path fill="#FFFDFD" d="M137.429 170.024h21.361v14.241h-21.361z" />
      <path
        fill="#121212"
        d="M138.319 170.914H157.9v12.46h-19.581z"
        opacity={0.298}
      />
      <path fill="#fff" d="M139.209 171.804h17.801v10.68h-17.801z" />

      <Face
        mood={mood}
        transform={`translate(${figmaFaceXYPosition}) scale(${figmaFaceScale})`}
      />
    </svg>
  );
};

export default Backpack;
