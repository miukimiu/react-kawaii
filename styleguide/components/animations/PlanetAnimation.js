import React, { Component } from 'react';
import Planet from '../../../src/components/planet/Planet';

class PlanetAnimation extends Component {
  state = {
    openEyes: true
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        openEyes: !this.state.openEyes
      })
    }, 1500);
  }

  render() {
    return (
      <Planet mood={this.state.openEyes ? "blissful" : "excited"} />
    );
  }


}
export default PlanetAnimation