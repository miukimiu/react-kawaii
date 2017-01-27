import Channel from '@kadira/storybook-channel';
import stringify from 'json-stringify-safe';

export const KEY = 'storybook-channel';

export default function createChannel({ page }) {
  const transport = new PostmsgTransport({ page });
  return new Channel({ transport });
}

export class PostmsgTransport {
  constructor(config) {
    this._config = config;
    this._buffer = [];
    this._handler = null;
    window.addEventListener('message', this._handleEvent.bind(this), false);
    document.addEventListener('DOMContentLoaded', () => this._flush());
    // Check whether the config.page parameter has a valid value
    if (config.page !== 'manager' && config.page !== 'preview') {
      throw new Error(`postmsg-channel: "config.page" cannot be "${config.page}"`);
    }
  }

  setHandler(handler) {
    this._handler = handler;
  }

  send(event) {
    const iframeWindow = this._getWindow();
    if (!iframeWindow) {
      return new Promise((resolve, reject) => {
        this._buffer.push({ event, resolve, reject });
      });
    }
    const data = stringify({ key: KEY, event });
    iframeWindow.postMessage(data, '*');
    return Promise.resolve(null);
  }

  _flush() {
    const buffer = this._buffer;
    this._buffer = [];
    buffer.forEach(item => {
      this.send(item.event)
        .then(item.resolve)
        .catch(item.reject);
    });
  }

  _getWindow() {
    if (this._config.page === 'manager') {
      // FIXME this is a really bad idea! use a better way to do this.
      // This finds the storybook preview iframe to send messages to.
      const iframe = document.getElementById('storybook-preview-iframe');
      if (!iframe) {
        return null;
      }
      return iframe.contentWindow;
    }
    return window.parent;
  }

  _handleEvent(e) {
    if(!e.data || typeof(e.data) !== 'string') {
      return;
    }
    let data;
    try {
      data = JSON.parse(e.data);
    } catch (e) {
      return null;
    }
    if(!data || typeof(data) !== 'object') {
      return null;
    }
    const { key, event } = data;
    if (key === KEY) {
      this._handler(event);
    }
  }
}
