import { FunctionComponent } from 'react';
import paths from './paths';
import getUniqueId from '../../utils/getUniqueId';
import Face from '../common/face';

import { KawaiiProps } from '../../types';

const Chocolate: FunctionComponent<KawaiiProps> = ({
  size = 320,
  mood = 'blissful',
  color = '#fc105c',
  ...rest
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 0.54}
    height={size}
    fill="none"
    viewBox="0 0 114 211"
    {...rest}
  >
    <g id="chocolate">
      <path id="body" fill="#8E5434" d={paths.choco_background}></path>
      <g id="bars">
        <g id="choco-inner_1">
          <path
            id="Union"
            fill="#fff"
            fillOpacity="0.1"
            fillRule="evenodd"
            d={paths.choco_inner_1}
            clipRule="evenodd"
          ></path>
        </g>
        <g id="choco-inner_2">
          <path
            id="Union_2"
            fill="#fff"
            fillOpacity="0.1"
            fillRule="evenodd"
            d={paths.choco_inner_2}
            clipRule="evenodd"
          ></path>
        </g>
        <g id="choco-inner_3">
          <path
            id="Union_3"
            fill="#fff"
            fillOpacity="0.1"
            fillRule="evenodd"
            d={paths.choco_inner_3}
            clipRule="evenodd"
          ></path>
        </g>
        <g id="choco-inner_4">
          <path
            id="Union_4"
            fill="#fff"
            fillOpacity="0.1"
            fillRule="evenodd"
            d={paths.choco_inner_4}
            clipRule="evenodd"
          ></path>
        </g>
        <g id="choco-inner_5">
          <path
            id="Union_5"
            fill="#fff"
            fillOpacity="0.1"
            fillRule="evenodd"
            d={paths.choco_inner_5}
            clipRule="evenodd"
          ></path>
        </g>
        <g id="choco-inner_6">
          <path
            id="Union_6"
            fill="#fff"
            fillOpacity="0.1"
            fillRule="evenodd"
            d={paths.choco_inner_6}
            clipRule="evenodd"
          ></path>
        </g>
      </g>
      <g id="Group 15">
        <path id="paper" fill={color} d={paths.paper}></path>
        <g id="paper-folded">
          <path id="Vector" fill={color} d={paths.paper_folded}></path>
          <path
            id="Vector_2"
            fill="#000"
            fillOpacity="0.15"
            d="M0 125.016h102.305L114 92.5 0 125.016z"
          ></path>
        </g>
      </g>
    </g>
    <Face mood={mood} transform="translate(25 150)" uniqueId={getUniqueId()} />
  </svg>
);

export default Chocolate;
