import React from 'react';
import paths from './paths';

const Face = ({ mood, ...rest }) => (
  <g id="kawaii-face" {...rest}>
    <defs>
      <path d={paths.defs} id="kawaii-face__path-1" />
    </defs>
    <g id="kawaii-face__mouth" transform="translate(18.000000, 16.000000)">
      {(mood === 'blissful' || mood === 'lovestruck') &&
        <g
          id="kawaii-face__mouth__joy"
          transform="translate(0.000000, 1.000000)"
        >
          <mask id="kawaii-face__mask-2" fill="white">
            <use xlinkHref="#kawaii-face__path-1" />
          </mask>
          <use
            id="Combined-Shape"
            fill="#000000"
            xlinkHref="#kawaii-face__path-1"
          />
          <path
            d={paths.tongue}
            id="kawaii-face__tongue"
            fill="#E74144"
            mask="url(#kawaii-face__mask-2)"
            transform="translate(15.000000, 11.431885) scale(1, -1)
            translate(-15.000000, -11.431885)"
          />
        </g>}
      {mood === 'happy' &&
        <path d={paths.happy} id="kawaii-face__mouth__happy" fill="#000000" />}
      {mood === 'shocked' &&
        <ellipse
          id="kawaii-face__mouth__shocked"
          cx="15"
          cy="14"
          rx="9"
          ry="10"
          fill="#000000"
        />}
      {mood === 'sad' &&
        <path
          d={paths.sad}
          id="kawaii-face__mouth__sad"
          fill="#000000"
          transform="translate(14.999999, 5.500000) scale(1, -1) translate(-14.999999, -5.500000)"
        />}
    </g>
    <g
      id="kawaii-face__blush"
      transform="translate(0.000000, 15.000000)"
      fill="#000000"
      opacity="0.2"
    >
      <circle id="Oval" cx="3" cy="3" r="3" />
      <circle id="Oval" cx="63" cy="3" r="3" />
    </g>
    <g
      id="kawaii-face__eyes"
      transform="translate(2.000000, 0.000000)"
      fill="#000000"
    >
      {mood === 'blissful' &&
        <g
          id="kawaii-face__eyes__arc"
          transform="translate(1.000000, 0.000000)"
        >
          <path d={paths.bliss1} id="Fill-5" />
          <path d={paths.bliss2} id="Fill-5" />
        </g>}
      {(mood === 'happy' || mood === 'sad' || mood === 'shocked') &&
        <g
          id="kawaii-face__eyes__circle"
          transform="translate(1.000000, 2.000000)"
        >
          <circle cx="4.5" cy="4.5" r="4.5" />
          <circle cx="56.5" cy="4.5" r="4.5" />
        </g>}
      {mood === 'lovestruck' &&
        <g
          id="kawaii-face__eyes__heart"
          transform="translate(0.000000, 2.000000)"
          fillRule="nonzero"
        >
          <path d={paths.lovestruck1} id="Shape" />
          <path d={paths.lovestruck2} id="Shape" />
        </g>}
    </g>
  </g>
);

Face.propTypes = {
  mood: React.PropTypes.oneOf([
    'sad',
    'shocked',
    'happy',
    'blissful',
    'lovestruck',
  ]),
};

Face.defaultProps = {
  mood: 'blissful',
};

export default Face;
