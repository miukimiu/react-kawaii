import addons from '@kadira/storybook-addons';
import { EVENT_ID } from './';

export function linkTo(kind, story) {
  return function () {
    const channel = addons.getChannel();
    channel.emit(EVENT_ID, {kind, story});
  };
}
