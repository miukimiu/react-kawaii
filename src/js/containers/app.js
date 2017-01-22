import React, { Component } from 'react';
import * as motion from 'popmotion';

class App extends Component {

	componentDidMount() {

		// todo: study popmotion and do this properly
		const h1 = document.querySelector('.app h1');
		const p = document.querySelector('.app p') 

		const tw1 = motion.tween({
			ease: motion.easing.cubicBezier(0, .42, 0, 1),
			duration: 600,
			values: {
				x: {
					from: -30,
					to: 0
				},
				opacity: {
					from: 0,
					to: 1
				}
			}
		}).on(h1);

		const tw2 = motion.tween({
			ease: motion.easing.anticipate,
			duration: 600,
			values: {
				x: {
					from: -30,
					to: 0
				},
				opacity: {
					from: 0,
					to: 1
				}
			}
		}).on(p);

		const tl = motion.timeline([
			{
				tween: tw1
			},
			{
				tween: tw2,
				offset: "-=800"
			}
		]);


		setTimeout(() => {
	
			tl.start();

		}, 800);

	}

	render() {

		return (
			<div className="app">
				<h1>Reaclux Boilerplate</h1>
				<p>A React Redux Webpack Gulp Sass Mocha Enzyme Zombie Chai Boilerplate by <span>Punkbit</span></p>
			</div>
		);

	}

}

export default App;