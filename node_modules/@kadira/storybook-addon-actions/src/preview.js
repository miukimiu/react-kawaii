import addons from '@kadira/storybook-addons';
import stringify from 'json-stringify-safe';
import { EVENT_ID } from './';

function _format(arg) {
  if (arg && typeof arg.preventDefault !== 'undefined') {
    return stringify('[SyntheticEvent]');
  }
  return stringify(arg);
}

export function action(name) {
  return function (..._args) {
    const args = Array.from(_args).map(_format);
    const channel = addons.getChannel();
    const randomId = Math.random().toString(16).slice(2);
    channel.emit(EVENT_ID, {
      id: randomId,
      data: { name, args },
    });
  };
}

export function decorateAction(decorators) {
  return function (name) {
    const callAction = action(name);
    return function (..._args) {
      const decorated = decorators.reduce((args, fn) => fn(args), _args);
      callAction(...decorated);
    };
  };
}
