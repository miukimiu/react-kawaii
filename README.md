# React Kawaii

<div align="center" markdown="1">
  <img src="https://raw.githubusercontent.com/miukimiu/react-kawaii/master/docs/images/react-kawaii-logo%402x.png" width="450">
</div>

React Kawaii is a library of cute SVG illustrations (react components). Ideal if you want to give some cuteness and personality to your react application.

[![Version](https://img.shields.io/npm/v/react-kawaii.svg?style=flat-square)](https://www.npmjs.com/package/react-kawaii)
![npm](https://img.shields.io/npm/dt/react-kawaii.svg)

## Example

# ![React Kawaii Example](https://github.com/miukimiu/react-kawaii/blob/master/docs/images/react-kawaii-example.gif?raw=true)

## Install

With npm:

```sh
npm install --save react-kawaii
```

With yarn:

```sh
yarn add react-kawaii
```

### How to use

```javascript
import { Planet } from 'react-kawaii';

const Example = () => <Planet size={200} mood="blissful" color="#FDA7DC" />;
```

### How to use with React Native

```javascript
import { Planet } from 'react-kawaii/lib/native/';

const Example = () => <Planet size={200} mood="blissful" color="#FDA7DC" />;
```

Depending on your `react` and `react-native` version, you might need to to install the package
[react-native-svg](https://github.com/react-native-community/react-native-svg):

With npm:

```sh
npm install react-native-svg
```

With yarn:

```sh
yarn add react-native-svg
```

Link react-native:

```sh
react-native link react-native-svg
```

Read the react-native-svg [documentation](https://github.com/react-native-community/react-native-svg) in case you need help.

## Development

So you want to help developing some cute UI components?

If you want to develop a component

- `npm i`

- `npm run styleguide`

If you want to build

- `npm run styleguide:build`

## Documentation

See https://react-kawaii.now.sh/

### Components

All the components are SVG illustrations. You can pick different moods: sad, shocked, happy, blissful and lovestruck. You can also choose a color to your Kawaii and the size.

Available components:

- [x] Backpack - A cute backpack
- [x] Browser - A cute browser
- [x] Cat - A cute cat
- [x] CreditCard - A cute credit card
- [x] File - A cute file
- [x] Ghost - A cute ghost
- [x] IceCream - A cute ice-cream
- [x] Mug - A cute mug
- [x] Planet - A cute planet
- [x] SpeechBubble - A cute speech bubble
- [x] More Kawaii components coming soon...

## Contributors

- [miukimiu](https://github.com/miukimiu)
- [aliciacatalina](https://github.com/aliciacatalina)
- [SaraVieira](https://github.com/SaraVieira)
- [kombucha](https://github.com/kombucha)
- [codenakama](https://github.com/codenakama)
- [yuanchuan](https://github.com/yuanchuan)
- [khendrikse](https://github.com/khendrikse)
- [Italox](https://github.com/Italox)
- [Vinnl](https://github.com/Vinnl)
- [eliasparis](https://github.com/eliasparis)
- [uselessdev](https://github.com/uselessdev)
- [serotonyn](https://github.com/serotonyn)
