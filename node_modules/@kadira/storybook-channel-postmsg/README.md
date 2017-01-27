# Post Message Channel

Post Message channel for Kadira Storybooks. This channel can be used when the Storybook Renderer runs inside an iframe or a child window. A channel can be created using the `createChannel` function.

```js
import createChannel from '@kadira/storybook-channel-postmsg'
const channel = createChannel({ key: 'postmsg-key' })
```
