import React, { Component } from 'react';
import Tag from './Tag';

class SizeSelector extends Component {
  setSize = value => {
    this.props.onUpdateSize(value);
  };
  render() {
    const { activeSize } = this.props;
    return (
      <div>
        <Tag active={activeSize} text={140} onClick={() => this.setSize(140)}>
          Small
        </Tag>
        <Tag active={activeSize} text={180} onClick={() => this.setSize(180)}>
          Medium
        </Tag>

        <Tag active={activeSize} text={200} onClick={() => this.setSize(200)}>
          Large
        </Tag>
      </div>
    );
  }
}

export default SizeSelector;
