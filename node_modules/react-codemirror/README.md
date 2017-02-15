# Codemirror

The excellent [CodeMirror](https://codemirror.net) editor as a [React.js](http://facebook.github.io/react) component.


## Demo & Examples

Live demo: [JedWatson.github.io/react-codemirror](http://JedWatson.github.io/react-codemirror)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use codemirror is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-codemirror.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-codemirror --save
```


## Usage

```
var React = require('react');
var Codemirror = require('react-codemirror');

var App = React.createClass({
	getInitialState: function() {
		return {
			code: "// Code"
		};
	},
	updateCode: function(newCode) {
		this.setState({
			code: newCode
		});
	},
	render: function() {
		var options = {
			lineNumbers: true
		};
		return <Codemirror value={this.state.code} onChange={this.updateCode} options={options} />
	}
});

React.render(<App />, document.getElementById('app'));
```

### Methods

* `focus` focuses the CodeMirror instance
* `getCodeMirror` returns the CodeMirror instance, available .

You can interact with the CodeMirror instance using a `ref` and the `getCodeMirror()` method after the `componentDidMount` lifecycle event has fired (including inside the `componentDidMount` event in a parent Component).

### Properties

* `autoSave` `Boolean` automatically persist changes to underlying textarea (default false)
* `value` `String` the editor value
* `options` `Object (newValue)` options passed to the CodeMirror instance
* `onChange` `Function (newValue)` called when a change is made
* `onFocusChange` `Function (focused)` called when the editor is focused or loses focus

See the [CodeMirror API Docs](https://codemirror.net/doc/manual.html#api) for the available options.

### Using Language Modes

Several [language modes](https://codemirror.net/mode/) are included with CodeMirror for syntax hilighting.

By default (to optimise bundle size) all modes are not included. To enable syntax hilighting:

* install the `codemirror` package dependency (in addition to `react-codemirror`)
* require the language modes you wish to make available _after_ you require `react-codemirror` itself
* set the `mode` option in the `options` object

```js
var React = require('react');
var Codemirror = require('react-codemirror');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');

<Codemirror ... options={{
	mode: 'javascript'
}} />
```

See the [example source](https://github.com/JedWatson/react-codemirror/blob/master/example/src/example.js) for a reference implementation including JavaScript and markdown syntax hilighting.

### License

MIT. Copyright (c) 2016 Jed Watson.
