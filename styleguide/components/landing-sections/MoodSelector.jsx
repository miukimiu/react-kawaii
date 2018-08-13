import React, { Component } from 'react';
import styled from 'styled-components';
import remcalc from 'remcalc';

const MoodBox = styled.div`
  padding: ${remcalc(10)};
  margin-right: ${remcalc(5)}
  border-radius: 3px;
  display: inline-flex;
  background: ${props => (props.mood === props.active ? '#A6E191' : '#E0E4E8')};
  font-size: ${remcalc(14)};
`;

class MoodSelector extends Component {
  setMood = value => {
    this.props.onUpdateMood(value);
  };
  render() {
    const { activeMood } = this.props;
    return (
      <div>
        <MoodBox
          active={activeMood}
          mood="blissful"
          onClick={() => this.setMood('blissful')}
        >
          Blissful
        </MoodBox>
        <MoodBox
          active={activeMood}
          mood="lovestruck"
          onClick={() => this.setMood('lovestruck')}
        >
          Lovestruck
        </MoodBox>

        <MoodBox
          active={activeMood}
          mood="happy"
          onClick={() => this.setMood('happy')}
        >
          Happy
        </MoodBox>
        <MoodBox
          active={activeMood}
          mood="sad"
          onClick={() => this.setMood('sad')}
        >
          Sad
        </MoodBox>
        <MoodBox
          active={activeMood}
          mood="shocked"
          onClick={() => this.setMood('shocked')}
        >
          Shocked
        </MoodBox>
      </div>
    );
  }
}

export default MoodSelector;
