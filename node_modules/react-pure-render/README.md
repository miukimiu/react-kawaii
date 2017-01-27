# react-pure-render

A function, a component and a mixin for React pure rendering.

This module provides *exactly* the same functionality as [PureRenderMixin](https://facebook.github.io/react/docs/pure-render-mixin.html), but as a standalone module and in three different flavors.

### Usage

#### Function

This is my preferred method, but it requires ES7 [class property transform](https://gist.github.com/jeffmo/054df782c05639da2adb) to be enabled by putting `{ "stage": 0 }` in your [.babelrc](https://babeljs.io/docs/usage/babelrc/).

```js
import shouldPureComponentUpdate from 'react-pure-render/function';

export default class Button {
  shouldComponentUpdate = shouldPureComponentUpdate;

  render() { }
}
```

#### Component

Inheritance is not very cool but it doesn't hurt a lot if it's just for the sake of this single method. If you don't want to use stage 0 transforms, you can use a base class instead:

```js
import PureComponent from 'react-pure-render/component';

export default class Button extends PureComponent {
  render() { }
}
```

#### Mixin

If you're working with `createClass`-style components, use the mixin. It's exactly the same as [`React.addons.PureRenderMixin`](https://facebook.github.io/react/docs/pure-render-mixin.html).

```js
var React = require('react');
var PureMixin = require('react-pure-render/mixin');

var Button = React.createClass({
  mixins: [PureMixin],

  render: function () { }
});

module.exports = Button;
```

#### shallowEqual

Sometimes `shallowEqual` is all you need. It's bad to reach out into React internals, so this library exposes exactly the same `shallowEqual` you already know and love from React.

```js
import shallowEqual from 'react-pure-render/shallowEqual';
console.log(shallowEqual({ x: 42 }, { x: 42 });
```

### Known Issues

If a component in the middle of your rendering chain has pure rendering, but some nested component relies on a `context` change up the tree, **the nested component won't learn about `context` change and won't update**. This is a [known React issue](https://github.com/facebook/react/issues/2517) that exists because `context` is not a documented feature and is not finished. However some React libraries already rely on `context`, for example, [React Router](https://github.com/rackt/react-router). My suggestion for now is to use pure components in apps relying on such libraries very carefully, and only use pure rendering for leaf-ish components that are known *not* to rely on any parent `context`.

### Further Reading

* [PureRenderMixin](https://facebook.github.io/react/docs/pure-render-mixin.html)
* [Advanced Performance](https://facebook.github.io/react/docs/advanced-performance.html)

### License

MIT
