import addons from '@kadira/storybook-addons';
import { ADDON_ID, EVENT_ID } from './';

export function register() {
  addons.register(ADDON_ID, api => {
    const channel = addons.getChannel();
    channel.on(EVENT_ID, selection => {
      api.selectStory(selection.kind, selection.story);
    });
  });
}
