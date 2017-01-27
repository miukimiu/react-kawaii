## Changelog

### v1.6.0
28 Oct 2016

Revert stuff introduce with v1.6.0. It might break react-native-storybook.
We have [another way](https://github.com/kadirahq/react-storybook/pull/582#issuecomment-256840165) to do what we support to do with preview decorators.

### v1.6.0
28 Oct 2016

* Add `setPreviewDecorator` and `getPreviewDecorator` methods.
* Now following methods can only be set once and they accept an option name as the second argument.
  * setChannel(channel, name)
  * setDatabase(database, name)
  * setPreview(preview, name)
  * setPreviewDecorator(decorator, name)

### v1.5.0
13 Aug 2016

* Add `getDatabase` and `setDatabase` methods [PR3](https://github.com/kadirahq/storybook-addons/pull/3)

### v1.4.0
29 Aug 2016

* Add `getPreview` and `setPreview` methods [PR2](https://github.com/kadirahq/storybook-addons/pull/2)

### v1.3.1

* First stable release with addon store for loaders, panels and channel.
