/* eslint new-cap:0 no-unused-vars:0 */
"use strict";

import React from "react";

const Button = React.createClass({
  propTypes: {
    buttonStyle: React.PropTypes.object,
    onClick: React.PropTypes.func
  },

  getDefaultProps() {
    return {
      darkMode: false
    };
  },

  render() {
    return (
      <button type="button" onClick={this.props.onClick} style={this.props.buttonStyle}>
        {this.props.children}
      </button>
    );
  }
});

export default Button;
