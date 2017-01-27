import React, { Component } from 'react';
import { TweenLite } from "gsap";

const img = require('../../images/logo-reactatouille-boilerplate.png')

class App extends Component {

	componentDidMount() {

		TweenLite.fromTo(this.refs.logo, 0.8, { opacity: 0, x: 50 }, { opacity: 1, x: 0, ease: Bounce.easeOut })

	}

	render() {

		return (
			<div className="app">
				<img ref='logo' src={ img } alt='' />
			</div>
		);

	}

}

export default App;
