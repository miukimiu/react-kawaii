import React, { Component } from 'react';
import Tag from './Tag';

class MoodSelector extends Component {
  setMood = value => {
    this.props.onUpdateMood(value);
  };
  render() {
    const { activeMood } = this.props;
    return (
      <div>
        <Tag
          active={activeMood}
          text="blissful"
          onClick={() => this.setMood('blissful')}
        >
          Blissful
        </Tag>
        <Tag
          active={activeMood}
          text="lovestruck"
          onClick={() => this.setMood('lovestruck')}
        >
          Lovestruck
        </Tag>

        <Tag
          active={activeMood}
          text="happy"
          onClick={() => this.setMood('happy')}
        >
          Happy
        </Tag>
        <Tag
          active={activeMood}
          text="excited"
          onClick={() => this.setMood('excited')}
        >
          Excited
        </Tag>
        <Tag active={activeMood} text="sad" onClick={() => this.setMood('sad')}>
          Sad
        </Tag>
        <Tag
          active={activeMood}
          text="shocked"
          onClick={() => this.setMood('shocked')}
        >
          Shocked
        </Tag>
        <Tag
          active={activeMood}
          text="KO"
          onClick={() => this.setMood('ko')}
        >
          KO
        </Tag>
      </div>
    );
  }
}

export default MoodSelector;
