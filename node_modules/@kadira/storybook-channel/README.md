# Storybook Channel

Storybook Channel is similar to an EventEmitter. Channels are used with Storybook implementations to send/receive events between the Storybook Manager and the Storybook Renderer.

```
Channel {
  addListener(type, listener)
  emit(type, ...args)
  eventNames()
  listenerCount(type)
  listeners(type)
  on(type, listener)
  once(type, listener)
  prependListener(type, listener)
  prependOnceListener(type, listener)
  removeAllListeners(type)
  removeListener(type, listener)
}
```

The channel takes a Transport object as a parameter which will be used to send/receive messages. The transport object should implement this interface.

```
Transport {
  send(event)
  setHandler(handler)
}
```

Currently, channels are baked into storybook implementations and therefore this module is not designed to be used directly by addon developers. When developing addons, use the `getChannel` method exported by `@kadira/storybook-addons` module. For this to work, Storybook implementations should use the `setChannel` method before loading addons.

```js
import addons from '@kadira/storybook-addons'
const channel = addons.getChannel()
```
