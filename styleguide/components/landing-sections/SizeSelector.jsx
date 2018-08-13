import React, { Component } from 'react';
import styled from 'styled-components';
import remcalc from 'remcalc';

const SizeBox = styled.div`
  padding: ${remcalc(4)} ${remcalc(8)};
  margin: ${remcalc(5)}
  border-radius: 3px;
  display: inline-flex;
  background: ${props => (props.size === props.active ? '#83D1FB' : '#E0E4E8')};
  font-size: ${remcalc(14)};
  cursor: pointer;
  transition: .5s ease;

  &:hover {
    background: #A6E191;
  }
`;

class SizeSelector extends Component {
  setSize = value => {
    this.props.onUpdateSize(value);
  };
  render() {
    const { activeMood } = this.props;
    return (
      <div>
        <SizeBox
          active={activeMood}
          size={140}
          onClick={() => this.setSize(140)}
        >
          Small
        </SizeBox>
        <SizeBox
          active={activeMood}
          size={180}
          onClick={() => this.setSize(180)}
        >
          Medium
        </SizeBox>

        <SizeBox
          active={activeMood}
          size={200}
          onClick={() => this.setSize(200)}
        >
          Large
        </SizeBox>
      </div>
    );
  }
}

export default SizeSelector;
