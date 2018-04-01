import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';
import Face from '../common/face/Face';
import Wrapper from '../common/wrapper/Wrapper';

const Browser = ({ size, text, showTextOnHover, color, mood }) => (
  <Wrapper
    style={{ width: size * 1.44, height: size }}
    showTextOnHover={showTextOnHover}
    text={text}
    width={size * 1.44}
    height={size}
    color={color}
    speechBubbleTop={size / 4}
  >
    <svg
      width={size * 1.44}
      height={size}
      viewBox="0 0 200 139"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="kawaii-browser">
        <g id="kawaii-browser__body" fillRule="nonzero">
          <path d={paths.shape} id="kawaii-browser__shape" fill="#61DDBC" />
          <path
            d={paths.shadow}
            id="kawaii-browser__shadow"
            fill="#121212"
            opacity=".1"
          />
          <g id="address-bar" transform="translate(.097)">
            <path d={paths.addressBar} fill="#111" />
            <ellipse fill="#FFF" cx="168.855" cy="10.901" rx="3.4" ry="3.395" />
            <ellipse fill="#FFF" cx="180.074" cy="10.901" rx="3.4" ry="3.395" />
            <g id="address" transform="translate(12.654 5.47)" fill="#FFF">
              <rect
                x=".277"
                y=".163"
                width="145.775"
                height="10.563"
                rx="5.282"
              />
            </g>
          </g>
        </g>
        <Face mood={mood} transform="translate(67 63)" />
      </g>
    </svg>
  </Wrapper>
);

Browser.propTypes = {
  /**
   * Size of the width
   */
  size: PropTypes.number,
  mood: PropTypes.oneOf(['sad', 'shocked', 'happy', 'blissful', 'lovestruck']),
  /**
   * Hex color
   */
  color: PropTypes.string,
  /**
   * Set the text to show on the speech bubble
   */
  text: PropTypes.string,
  /**
   * Set as true to show the speech bubble on hover, as false to show text by default
   */
  showTextOnHover: PropTypes.bool,
};

Browser.defaultProps = {
  size: 180,
  mood: 'blissful',
  color: '#FDA7DC',
  showTextOnHover: true,
  text: null,
};

export default Browser;
