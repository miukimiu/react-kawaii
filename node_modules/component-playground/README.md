[![Build Status](https://travis-ci.org/FormidableLabs/component-playground.svg?branch=master)](https://travis-ci.org/FormidableLabs/component-playground)
![](https://badge-size.herokuapp.com/FormidableLabs/component-playground/master/dist/component-playground.min.js?compression=gzip)

# component-playground
A component for rendering React Components and ES6 code with editable source and live preview

![Component Playground](http://i.imgur.com/se3avpr.png)

### Demo

[https://formidable.com/open-source/component-playground/](https://formidable.com/open-source/component-playground/)

### Installation

```sh
npm install component-playground
```

### Set up

In the head of your html document, either add the css files from the demo or from a CDN like:

```html
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/codemirror.min.css"/>
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/theme/monokai.min.css"/>
```

In your JSX, require the component and use it like this:

```javascript
'use strict';

var React = require('react/addons');
var ReactDOM = require('react-dom');
var Playground = require('component-playground');
var Button = require('./components/button');

var componentExample = require("raw!./examples/component.example");

var Index = React.createClass({
  render() {
    return (
      <div className="component-documentation">
        <Playground codeText={componentExample} scope={{React: React, Button: Button}}/>
      </div>
    );
  }
});

ReactDOM.render(<Index/>, document.getElementById('root'));
```

### Props

#### `codeText`
_React.PropTypes.string.isRequired_

`codeText` takes a string of JSX markup as its value. While you can just pass it a string, I find it is easier to make a separate file and use Webpack's raw loader to load in the raw source. In the example above I use the .example extension, and an examples folder to organize my samples.

An example file would look like:

```js
<Button style={{background: '#3498db'}}>Hi</Button>
```

#### scope
_React.PropTypes.object.isRequired_

When evaluating the JSX, it needs to be provided a scope object. At the very least, React needs to be provided to the scope, if any custom tags aren't being used. See below:

```js
<Playground codeText={componentExample} scope={{React: React}}/>
```

Any module/component that is used inside the playground needs to be added to the scope object. See `/demo` for an example of how this works.

### theme
_React.PropTypes.string_

String specifying which CodeMirror theme to initialize with. Defaults to 'monokai'.

### collapsableCode
_React.PropTypes.bool_

Allows the user to collapse the code block.

```js
<Playground collapsableCode={true} codeText={componentExample} scope={{React: React}}/>
```

### initiallyExpanded
_React.PropTypes.bool_

Makes collapsable code block initially expanded.

```js
<Playground
  collapsableCode={true}
  initiallyExpanded={true}
  codeText={componentExample}
  scope={{React: React}}/>
```

### docClass
_React.PropTypes.node_

A component class that will be used to auto-generate docs based on that component's `propTypes`. See `propDescriptionMap` below for how to annotate the generate prop docs.

```js
<Playground docClass={MyComponent} codeText={componentExample} scope={{React: React}}/>
```

### propDescriptionMap
_React.PropTypes.string_

Annotation map for the docClass. The key is the prop to annotate, the value is the description of that prop.

```js
<Playground
  docClass={MyComponent}
  propDescriptionMap={{
    collapsableCode: "Allows the user to collapse the code block"
  }}
  codeText={componentExample}
  scope={{React: React}}/>
```

### es6Console
_React.PropTypes.bool_

Turns preview into a simple console for testing out ES6 code. Use `console.log()` in the playground to generate output.

```js
<Playground
  es6Console={true}
  codeText={es6Example} />
```

### noRender
_React.PropTypes.bool_

Defaults to true. If set to false, allows you bypass the `component-playground`'s component wrapper and render method.
You can use this option to write higher order components directly in your example code and use your
own Render method.
NOTE: This option **requires** that the `React.render` method be in your code

```js
var ComponentExample = React.createClass({
  render: function() {
    return (
        <p>Hi</p>
    )
  }
});

React.render(<ComponentExample/>, mountNode);
```
