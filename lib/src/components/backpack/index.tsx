import React, { FunctionComponent } from 'react';
import paths from './paths';
import getUniqueId from '../../utils/getUniqueId';
import Face from '../common/face';
import { KawaiiProps } from '../../types';

const Backpack: FunctionComponent<KawaiiProps> = ({
  size = 240,
  mood = 'blissful',
  color = '#FFD882',
  ...rest
}) => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={size * 0.63}
    height={size}
    viewBox="0 0 138 218"
    {...rest}
  >
    <defs>
      <path id="pocket__shape-path" d={paths.pocketShapePath} />
      <path id="pocket__shape__shadow-path" d={paths.pocketShapeShadowPath} />
    </defs>
    <g id="kawaii-backpack" transform="translate(0 -1)">
      <g id="right-shoulder-strap" transform="matrix(-1 0 0 1 125.901 13.054)">
        <path
          id="right-shoulder-strap__back"
          fill={color}
          d="M0 5.948v43.619l13.879-14.792z"
        />
        <path
          id="right-shoulder-strap__back__shadow"
          fill="#FFF"
          fillRule="nonzero"
          opacity="0.4"
          d="M0 5.948v43.619l13.879-14.792z"
        />
        <path
          id="right-shoulder-strap__front"
          fill={color}
          d="M9.193 34.697L0 5.127 21.014 0l7.735 24.677z"
        />
      </g>
      <g id="left-shoulder-strap" transform="translate(11.896 13.054)">
        <path
          id="left-shoulder-strap__back"
          fill={color}
          d="M0 5.948v43.619l13.879-14.792z"
        />
        <path
          id="left-shoulder-strap__back_shadow"
          fill="#FFF"
          fillRule="nonzero"
          opacity="0.4"
          d="M0 5.948v43.619l13.879-14.792z"
        />
        <path
          id="left-shoulder-strap__front"
          fill={color}
          d="M9.193 34.697L0 5.127 21.014 0l7.735 24.677z"
        />
      </g>
      <g id="hanging-loop" transform="translate(47.585)">
        <path
          id="hanging-loop__back"
          fill={color}
          d="M16.853 7.931h9.913L21.81.991z"
        />
        <path
          id="hanging-loop__back_shadow"
          fill="#121212"
          fillRule="nonzero"
          opacity="0.14"
          d="M16.853 7.931h9.913L21.81.991z"
        />
        <path
          id="hanging-loop__shape"
          fill={color}
          d={paths.hangingLoopShape}
        />
      </g>
      <g id="main-compartment" transform="translate(0 26.617)">
        <path
          id="main-compartment__shape"
          fill={color}
          d={paths.mainCompartmentShape}
        />
        <path
          id="main-compartment__bottom-stripe"
          fill="#121212"
          fillRule="nonzero"
          d={paths.mainCompartmentBottomStripe}
          opacity="0.07"
        />
        <Face
          mood={mood}
          transform="translate(36 70)"
          uniqueId={getUniqueId()}
        />
        <path
          id="main-compartment__top"
          fill="#121212"
          fillRule="nonzero"
          d={paths.mainCompartmentTop}
          opacity="0.07"
        />
      </g>
      <g id="pocket" transform="translate(12.888 135.981)">
        <mask id="mask-4" fill="#fff">
          <use xlinkHref="#pocket__shape-path" />
        </mask>
        <use id="pocket__shape" fill={color} xlinkHref="#pocket__shape-path" />
        <mask id="mask-6" fill="#fff">
          <use xlinkHref="#pocket__shape__shadow-path" />
        </mask>
        <use
          id="pocket__shape__shadow"
          fill="#121212"
          fillRule="nonzero"
          opacity="0.14"
          xlinkHref="#pocket__shape__shadow-path"
        />
        <g id="Group-6" mask="url(#mask-6)">
          <g transform="translate(0 15.862)">
            <path
              id="Rectangle-7"
              fill="#33363B"
              opacity="0.408"
              d="M0 2.974h113.014v2.974H0z"
            />
            <path
              id="Rectangle-7-Copy"
              fill="#555D67"
              opacity="0.408"
              d="M0 0h113.014v2.974H0z"
            />
            <path
              id="Rectangle-8"
              fill="#6D727A"
              opacity="0.587"
              d="M107.066 0h5.948v5.948h-5.948z"
            />
            <path id="zip" fill="#49505A" d={paths.zip} opacity="0.746" />
          </g>
        </g>
        <g id="brand" mask="url(#mask-6)">
          <g transform="translate(78.737 39.368)">
            <path id="Rectangle-6" fill="#FFFDFD" d="M0 0h27.789v18.526H0z" />
            <path
              id="Rectangle-6-Copy"
              fill="#121212"
              opacity="0.298"
              d="M1.158 1.158h25.474v16.211H1.158z"
            />
            <path
              id="brand"
              fill="#FFF"
              d="M2.316 2.316h23.158v13.895H2.316z"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default Backpack;
