# Redux DevTools Themes

A repository of different color schemes for Redux DevTools monitors. Any Redux DevTools monitor can use these.

Currently, most of these are [Base16 themes](https://github.com/gaearon/base16-js). However, there is an additional `nicinabox` theme designed by [Nic Aitch](http://nicinabox.com/) specifically for Redux DevTools. In the future, we might want to remove some of the themes that don’t work with Redux DevTools well, or add more custom themes, so that’s the justification for a separate package.

## Installation

```
npm install --save redux-devtools-themes
```

## Usage

```js
import * as themes from 'redux-devtools-themes';

// somewhere in your monitor component
const colors = themes[this.props.theme];
return <div style={{ color: colors.base00 }}>...</div>;
```

## License

MIT