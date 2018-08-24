import React, { Component } from 'react';
import styled from 'styled-components';
import remcalc from 'remcalc';

const ColorBox = styled.div`
  height: ${remcalc(20)};
  width: ${remcalc(20)};
  margin: 0 ${remcalc(4)}
  border-radius: 3px;
  background: ${props => props.color};
  display: inline-flex;
  border: ${props =>
    props.color === props.active
      ? '2px solid white'
      : '2px solid' + props.color};
`;

class ColorSelector extends Component {
  setColor = value => {
    this.props.onUpdateColor(value);
  };

  render() {
    const { activeColor } = this.props;
    return (
      <div>
        <ColorBox
          active={activeColor}
          color="#FCCB7E"
          onClick={() => this.setColor('#FCCB7E')}
        />
        <ColorBox
          active={activeColor}
          color="#A6E191"
          onClick={() => this.setColor('#A6E191')}
        />
        <ColorBox
          active={activeColor}
          color="#FDA7DC"
          onClick={() => this.setColor('#FDA7DC')}
        />
        <ColorBox
          active={activeColor}
          color="#E0E4E8"
          onClick={() => this.setColor('#E0E4E8')}
        />
        <ColorBox
          active={activeColor}
          color="#83D1FB"
          onClick={() => this.setColor('#83D1FB')}
        />
      </div>
    );
  }
}

export default ColorSelector;
