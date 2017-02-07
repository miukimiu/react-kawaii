import React, { Component } from 'react';

class App extends Component {

	render() {

		return (
			<div className="app">
                <div className="main">
                    <nav className="main__nav">nav</nav>
                    <main className="main__content page--triangle">
                        <div className="hero">
                            <h1 className="h1--light">React Kawaii</h1>
                            <h3 className="h3--light">Cute react ui components</h3>
                        </div>
                    </main>
                </div>
			</div>
		);

	}

}

export default App;
