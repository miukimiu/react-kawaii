import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';
import getUniqueId from '../../utils/getUniqueId';
import Face from '../common/face/Face';
import Wrapper from '../common/wrapper/Wrapper';

const Chocolate = ({ size, color, mood, className }) => (
	<Wrapper className={className}>
		<svg
		xmlns="http://www.w3.org/2000/svg"
		height={size}
		width={size} 
		viewBox="0 0 512 512" >
			<path
				id="kawaii-choco-background"
				d={paths.choco_background} 
				fill="#853913"/>
			<path 
				id="kawaii-choco-right-half" 
				d={paths.choco_right_half} 
				fill="#6e2e08"/>
			<path 
				id="kawaii-choco-middle-rect" 
				d={paths.choco_middle_rect} 
				fill="#6e2e08"/>
			<path 
				id="kawaii-choco-right-darker-square" 
				d={paths.choco_right_darker_square} 
				fill="#5c2707"/>
			<path 
				id="kawaii-paper-main" 
				d={paths.paper_main} 
				fill={color}/>
			<path 
				id="kawaii-paper-right" 
				d={paths.paper_right} 
				fill="#121212"
				opacity="0.15"/>
			<path 
				id="kawaii-lapel-main" 
				d={paths.lapel_main} 
				fill="#121212"
				opacity="0.15"/>
			<path 
				id="kawaii-lapel-right-darker" 
				d={paths.lapel_right_darker} 
				fill="#121212"
				opacity="0.15"/>
			<Face
				mood={mood}
				transform="translate(69 108) scale(2.2, 2.2)"
				uniqueId={getUniqueId()}
			/>
		</svg>
	</Wrapper>
);

Chocolate.propTypes = {
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

Chocolate.defaultProps = {
  size: 320,
  mood: 'blissful',
  color: '#fc105c'
};

export default Chocolate;