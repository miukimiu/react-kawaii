/* eslint new-cap:0 no-unused-vars:0 */
"use strict";

import React from "react";

const Button = React.createClass({
  contextTypes: {
    environment: React.PropTypes.string
  },

  render() {
    return (
      <h1>ENV: {this.context.environment || "development"}</h1>
    );
  }
});

export default Button;
