import React from 'react';
import paths from './paths';
import Face from '../common/Face';
import KawaiiElementWrapper from '../common/KawaiiElementWrapper';

const KawaiiPlanet = props => (
  <KawaiiElementWrapper
    style={{ width: props.size, height: props.size }}
    showTextOnHover={props.showTextOnHover}
    text={props.text}
    width={props.size}
    height={props.size}
    color={props.color}
  >
    <svg
      width={props.size}
      height={props.size}
      viewBox="114 94 151 150"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path d={paths.path1} id="kawaii-planet__path-1" />
        <path d={paths.path2} id="kawaii-planet__path-3" />
        <path d={paths.path3} id="kawaii-planet__path-5" />
      </defs>
      <g
        id="kawaii-planet"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform="translate(115.000000, 94.000000)"
      >
        <g
          id="kawaii-planet__body-color"
          transform="translate(8.000000, 8.000000)"
        >
          <mask id="kawaii-planet__mask-2" fill="white">
            <use xlinkHref="#kawaii-planet__path-1" />
          </mask>
          <use
            id="kp-body-color-"
            fill={props.color}
            xlinkHref="#kawaii-planet__path-1"
          />
          <mask id="kawaii-planet__mask-4" fill="white">
            <use xlinkHref="#kawaii-planet__path-3" />
          </mask>
          <use
            id="kp-body-color-darker"
            fill="#111111"
            opacity="0.233908582"
            xlinkHref="#kawaii-planet__path-3"
          />
        </g>
        <Face mood={props.mood} transform="translate(42.000000, 65.000000)" />
      </g>
    </svg>
  </KawaiiElementWrapper>
);

KawaiiPlanet.propTypes = {
  /**
    * Size of the width
    */
  size: React.PropTypes.number,
  mood: React.PropTypes.oneOf([
    'sad',
    'shocked',
    'happy',
    'blissful',
    'lovestruck',
  ]),
  /**
   * Set the text to show on the speech bubble
   */
  text: React.PropTypes.string,
  /**
   * Set as true to show the speech bubble on hover, as false to show text by default
   */
  showTextOnHover: React.PropTypes.bool,
  /**
    * Hex color
    */
  color: React.PropTypes.string,
};

KawaiiPlanet.defaultProps = {
  size: 150,
  mood: 'blissful',
  color: '#83D1FB',
  showTextOnHover: true,
  text: null,
};

export default KawaiiPlanet;
