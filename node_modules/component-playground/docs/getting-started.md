# Getting Started with Component Playground

## Set Up

In your HTML document, add the required CodeMirror scripts at the bottom, before your bundle script: 

```html
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/codemirror.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/mode/javascript/javascript.min.js"></script>
```

In the head of your document, either add the css files form the demo or from a CDN like:

```html
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/codemirror.min.css"/>
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/theme/monokai.min.css"/>
```

In your JSX, require the component and use it like this:

```js
import React from "react";
import Playground from "component-playground";
import ReactDOM from "react-dom";
import { VictoryPie } from "victory";
import { random, range } from "lodash";

const componentExample = require("raw!./examples/component.example");

class Index extends React.Component {
  render() {
    return (
      <div className="component-documentation">
        <Playground codeText={componentExample} scope={{React, ReactDOM, VictoryPie, random, range}}/>
      </div>
    );
  }
};

ReactDOM.render(<Index/>, mountNode);
```
