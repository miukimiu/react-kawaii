import React from 'react';
import paths from './paths';
import KawaiiFace from '../face/KawaiiFace';
import KawaiiWrapper from '../wrapper/KawaiiWrapper';

const KawaiiBrowser = props => (
  <KawaiiWrapper
    style={{ width: props.size, height: props.size * 0.69 }}
    showTextOnHover={props.showTextOnHover}
    text={props.text}
    width={props.size}
    height={props.size * 0.69}
    color={props.color}
  >
    <svg
      width={props.size}
      height={props.size * 0.695}
      viewBox="0 0 200 139"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path d={paths.kawaiiBrowserPath1} id="kawaiiBrowserPath1" />
      </defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="kawaii-example" transform="translate(-648.000000, -318.000000)">
          <g id="kawaiiBrowser" transform="translate(648.000000, 318.000000)">
            <g id="kawaiiBrowserBody" fillRule="nonzero">
              <path
                d={paths.kawaiiBrowserBodyBg}
                id="kawaiiBrowserBodyBg"
                fill={props.color}
              />
              <path
                d={paths.kawaiiBrowserBodyShadow}
                id="kawaiiBrowserBodyShadow"
                fillOpacity="0.2"
                fill="#121212"
              />
            </g>
            <g id="address-bar" transform="translate(0.097135, 0.000000)">
              <path
                d={paths.KawaiiBrowserAdressBarBg}
                id="KawaiiBrowserAdressBarBg"
                fill="#111111"
              />
              <ellipse
                id="KawaiiBrowserAdressBarB"
                fill="#FFFFFF"
                cx="168.855256"
                cy="10.9006692"
                rx="3.3997086"
                ry="3.39539747"
              />
              <ellipse
                id="KawaiiBrowserAdressBarOvalA"
                fill="#FFFFFF"
                cx="180.074295"
                cy="10.9006692"
                rx="3.3997086"
                ry="3.39539747"
              />
              <g
                id="address"
                transform="translate(12.653787, 5.470355)"
                fill="#FFFFFF"
              >
                <rect
                  id="KawaiiBrowserAdressBar"
                  x="0.277247732"
                  y="0.163448083"
                  width="145.774648"
                  height="10.5633803"
                  rx="5.28169014"
                />
              </g>
            </g>
            <KawaiiFace
              mood={props.mood}
              transform="translate(67.000000, 63.000000)"
            />
          </g>
        </g>
      </g>

    </svg>
  </KawaiiWrapper>
);

KawaiiBrowser.propTypes = {
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
  * Hex color
  */
  color: React.PropTypes.string,
  /**
   * Set the text to show on the speech bubble
   */
  text: React.PropTypes.string,
  /**
   * Set as true to show the speech bubble on hover, as false to show text by default
   */
  showTextOnHover: React.PropTypes.bool,
};

KawaiiBrowser.defaultProps = {
  size: 120,
  mood: 'blissful',
  color: '#FDA7DC',
  showTextOnHover: true,
  text: null,
};

export default KawaiiBrowser;
