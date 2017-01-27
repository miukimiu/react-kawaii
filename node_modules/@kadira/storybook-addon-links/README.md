# Story Links Addon

The Story Links addon can be used to create links between stories. This addon works with both [React Storybook](https://github.com/kadirahq/react-storybook) and [React Native Storybook](https://github.com/kadirahq/react-native-storybook) (included by default).

## Getting Started

First, install the addon

```shell
npm install -D @kadira/storybook-addon-links
```

Add this line to your `addons.js` file (create this file inside your storybook config directory if needed).

```js
import '@kadira/storybook-addon-links/register';
```

Import the `linkTo` function and use it to create links. When creating links, provide the target story info.

```js
import { storiesOf } from '@kadira/storybook'
import { linkTo } from '@kadira/storybook-addon-links'

storiesOf('Button', module)
  .add('First', () => (
    <button onClick={linkTo('Button', 'Second')}>Go to "Second"</button>
  ))
  .add('Second', () => (
    <button onClick={linkTo('Button', 'First')}>Go to "First"</button>
  ));

```
