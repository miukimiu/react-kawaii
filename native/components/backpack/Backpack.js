import React from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path, Use, Defs, Mask } from 'react-native-svg';
import paths from './paths';
import getUniqueId from '../../utils/getUniqueId';
import Face from '../common/face/Face';
import Wrapper from '../common/wrapper/Wrapper';

const Backpack = ({ size, color, mood, className }) => (
  <Wrapper className={className}>
    <Svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size * 0.63}
      height={size}
      viewBox="0 0 138 218"
    >
      <Defs>
        <Path id="pocket__shape-path" d={paths.pocketShapePath} />
        <Path id="pocket__shape__shadow-path" d={paths.pocketShapeShadowPath} />
      </Defs>
      <G id="kawaii-backpack" transform="translate(0 -1)">
        <G
          id="right-shoulder-strap"
          transform="matrix(-1 0 0 1 125.901 13.054)"
        >
          <Path
            id="right-shoulder-strap__back"
            fill={color}
            d="M0 5.948v43.619l13.879-14.792z"
          />
          <Path
            id="right-shoulder-strap__back__shadow"
            fill="#FFF"
            fillRule="nonzero"
            opacity="0.4"
            d="M0 5.948v43.619l13.879-14.792z"
          />
          <Path
            id="right-shoulder-strap__front"
            fill={color}
            d="M9.193 34.697L0 5.127 21.014 0l7.735 24.677z"
          />
        </G>
        <G id="left-shoulder-strap" transform="translate(11.896 13.054)">
          <Path
            id="left-shoulder-strap__back"
            fill={color}
            d="M0 5.948v43.619l13.879-14.792z"
          />
          <Path
            id="left-shoulder-strap__back_shadow"
            fill="#FFF"
            fillRule="nonzero"
            opacity="0.4"
            d="M0 5.948v43.619l13.879-14.792z"
          />
          <Path
            id="left-shoulder-strap__front"
            fill={color}
            d="M9.193 34.697L0 5.127 21.014 0l7.735 24.677z"
          />
        </G>
        <G id="hanging-loop" transform="translate(47.585)">
          <Path
            id="hanging-loop__back"
            fill={color}
            d="M16.853 7.931h9.913L21.81.991z"
          />
          <Path
            id="hanging-loop__back_shadow"
            fill="#121212"
            fillRule="nonzero"
            opacity="0.14"
            d="M16.853 7.931h9.913L21.81.991z"
          />
          <Path
            id="hanging-loop__shape"
            fill={color}
            d={paths.hangingLoopShape}
          />
        </G>
        <G id="main-compartment" transform="translate(0 26.617)">
          <Path
            id="main-compartment__shape"
            fill={color}
            d={paths.mainCompartmentShape}
          />
          <Path
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

          <Path
            id="main-compartment__top"
            fill="#121212"
            fillRule="nonzero"
            d={paths.mainCompartmentTop}
            opacity="0.07"
          />
        </G>
        <G id="pocket" transform="translate(12.888 135.981)">
          <Mask id="mask-4" fill="#fff">
            <Use xlinkHref="#pocket__shape-path" href="#pocket__shape-path" />
          </Mask>
          <Use
            id="pocket__shape"
            fill={color}
            xlinkHref="#pocket__shape-path"
            href="#pocket__shape-path"
          />
          <Mask id="mask-6" fill="#fff">
            <Use
              xlinkHref="#pocket__shape__shadow-path"
              href="#pocket__shape__shadow-path"
            />
          </Mask>
          <Use
            id="pocket__shape__shadow"
            fill="#121212"
            fillRule="nonzero"
            opacity="0.14"
            xlinkHref="#pocket__shape__shadow-path"
            href="#pocket__shape__shadow-path"
          />
          <G id="Group-6" mask="url(#mask-6)">
            <G transform="translate(0 15.862)">
              <Path
                id="Rectangle-7"
                fill="#33363B"
                opacity="0.408"
                d="M0 2.974h113.014v2.974H0z"
              />
              <Path
                id="Rectangle-7-Copy"
                fill="#555D67"
                opacity="0.408"
                d="M0 0h113.014v2.974H0z"
              />
              <Path
                id="Rectangle-8"
                fill="#6D727A"
                opacity="0.587"
                d="M107.066 0h5.948v5.948h-5.948z"
              />
              <Path id="zip" fill="#49505A" d={paths.zip} opacity="0.746" />
            </G>
          </G>
          <G id="brand" mask="url(#mask-6)">
            <G transform="translate(78.737 39.368)">
              <Path id="Rectangle-6" fill="#FFFDFD" d="M0 0h27.789v18.526H0z" />
              <Path
                id="Rectangle-6-Copy"
                fill="#121212"
                opacity="0.298"
                d="M1.158 1.158h25.474v16.211H1.158z"
              />
              <Path
                id="brand"
                fill="#FFF"
                d="M2.316 2.316h23.158v13.895H2.316z"
              />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  </Wrapper>
);

Backpack.propTypes = {
  /**
   * Size of the width
   * */
  size: PropTypes.number,
  mood: PropTypes.oneOf([
    'sad',
    'shocked',
    'happy',
    'blissful',
    'lovestruck',
    'excited',
    'ko'
  ]),
  /**
   * Hex color
   */
  color: PropTypes.string
};

Backpack.defaultProps = {
  size: 240,
  mood: 'blissful',
  color: '#FFD882'
};

export default Backpack;
