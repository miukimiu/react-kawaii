[![build status](https://secure.travis-ci.org/survivejs/webpack-merge.svg)](http://travis-ci.org/survivejs/webpack-merge)
# webpack-merge - Merge designed for Webpack

**webpack-merge** provides a `merge` function that concatenates arrays and merges objects. This behavior is particularly useful in configuring webpack. There's also a webpack specific merge variant known as `merge.smart` that's able to take webpack specifics into account (i.e., it can flatten loader definitions).

## API

```javascript
var output = merge(object1, object2, object3, ...);

// smarter merging for loaders, see below
var output = merge.smart(object1, object2, object3, ...);
```

> Check out [SurviveJS - Webpack and React](http://survivejs.com/) to dig deeper into the topic.

## Example

**package.json**

```json
{
  "scripts": {
    "start": "webpack-dev-server",
    "build": "webpack"
  },
  ...
}
```

**webpack.config.js**

```javascript
var path = require('path');
var merge = require('webpack-merge');

var TARGET = process.env.npm_lifecycle_event;

var common = {
  entry: path.join(__dirname, 'app'),
  ...
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
    ],
  },
};

if(TARGET === 'start') {
  module.exports = merge(common, {
    module: {
      // loaders will get concatenated!
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel?stage=1',
          include: path.join(ROOT_PATH, 'app'),
        },
      ],
    },
    ...
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {
    ...
  });
}

...
```

Note that you can override existing arrays/objects like this:

```javascript
var common = {
  entry: [APP_PATH, STYLE_PATH]
  ...
};

if(TARGET === 'test') {
  module.exports = merge(common, {
    entry: [], // empty now
    ...
  });
}
```

## Smart Merging of Loaders

Webpack-merge tries to be smart about merging loaders when `merge.smart` is used. Loaders with matching tests will be merged into a single loader value.

**Loader string values `loader: 'babel'` override each other.**

```javascript
merge.smart({
  loaders: [{
    test: /\.js$/,
    loader: 'babel'
  }]
}, {
  loaders: [{
    test: /\.js$/,
    loader: 'coffee'
  }]
});
// will become
{
  loaders: [{
    test: /\.js$/,
    loader: 'coffee'
  }]
}
```

**Loader array values `loaders: ['babel']` will be merged, without duplication.**

```javascript
merge.smart({
  loaders: [{
    test: /\.js$/,
    loaders: ['babel']
  }]
}, {
  loaders: [{
    test: /\.js$/,
    loaders: ['coffee']
  }]
});
// will become
{
  loaders: [{
    test: /\.js$/,
    // appended because Webpack evaluated these from right to left
    // this way you can specialize behavior and build the loader chain
    loaders: ['babel', 'coffee']
  }]
}
```

**Loader query strings `loaders: ['babel?plugins[]=object-assign']` will be overridden**

```javascript
merge.smart({
  loaders: [{
    test: /\.js$/,
    loaders: ['babel?plugins[]=object-assign']
  }]
}, {
  loaders: [{
    test: /\.js$/,
    loaders: ['babel', 'coffee']
  }]
});
// will become
{
  loaders: [{
    test: /\.js$/,
    loaders: ['babel', 'coffee']
  }]
}
```

**Loader arrays in source values will have loader strings merged into them.**

```javascript
merge.smart({
  loaders: [{
    test: /\.js$/,
    loader: 'babel'
  }]
}, {
  loaders: [{
    test: /\.js$/,
    loaders: ['coffee']
  }]
});
// will become
{
  loaders: [{
    test: /\.js$/,
    // appended because Webpack evaluated these from right to left!
    loaders: ['babel', 'coffee']
  }]
}
```

**Loader strings in source values will always override.**

```javascript
merge.smart({
  loaders: [{
    test: /\.js$/,
    loaders: ['babel']
  }]
}, {
  loaders: [{
    test: /\.js$/,
    loader: 'coffee'
  }]
});
// will become
{
  loaders: [{
    test: /\.js$/,
    loader: 'coffee'
  }]
}
```

## Contributors

* [Fernando Montoya](https://github.com/montogeek) - Use separate lodash functions instead of the core package. Faster to install this way.
* [Jonathan Felchlin](https://github.com/GreenGremlin) - Smart merging for loaders.
* [David Gómez](https://github.com/davegomez) - Performance and cosmetic improvements.
* [siready](https://github.com/siready) - Extend `merge.smart` to support `include/exclude`.
* [C.J. Winslow](https://github.com/Whoaa512) - Make `merge.smart` `include/exclude` to work correctly with `loader`.
* [Artem Zakharchenko](https://github.com/blackrabbit99) - Fix `merge.smart` duplication so that if `include` exists, it will merge.
* [Matt Shwery](https://github.com/mshwery) - If `exclude` is the same while using `merge.smart`, merge `loaders`.
* [Lucretiel](https://github.com/Lucretiel) - Added a more generic test to describe merge behavior better.
* [Christian Hoffmeister](https://github.com/choffmeister) - Fix `merge.smart` behavior so that it checks against full loader names instead of just the first letter.
* [Ken Powers](https://github.com/knpwrs) - Changed Travis icon to use SVG (scales better).

## License

*webpack-merge* is available under MIT. See LICENSE for more details.
