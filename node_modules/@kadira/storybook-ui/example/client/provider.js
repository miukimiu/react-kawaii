import React from 'react';
import Preview from './preview';
import keycode from 'keycode';
import { EventEmitter } from 'events';
import parseKeyEvent from '../../src/libs/key_events';
import { Provider } from '../../src';

let id = 0;

const style = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default class ReactProvider extends Provider {
  constructor() {
    super();
    this.globalState = new EventEmitter();
  }

  getPanels() {
    const panels = {
      test1: {
        title: 'Test 1',
        render: () => {
          let inp;
          return (
            <div style={style}>
              <input
                ref={i => {inp=i}}
                value={this.api.getQueryParam("text")===undefined ? 'ONE' : this.api.getQueryParam("text")}
                onChange={() => {this.api.setQueryParams({text: inp.value})}}>
              </input>
            </div>
          );
        },
      },
      test2: {
        title: 'Test 2',
        render: () => <div style={style}>II</div>,
      },
      test3: {
        title: 'Test 3',
        render: () => <div style={style}>III</div>,
      },
      test4: {
        title: 'Test 4',
        render: () => <div style={style}>IV</div>,
      },
    }
    return panels;
  }

  // You must implement this public API.
  renderPreview(selectedKind, selectedStory) {
    // We need to do this here to avoid memory leaks in the globalState.
    // That's because renderPreview can be called multiple times.
    this._handlePreviewEvents();

    // create preview React component.
    const preview = new Preview(this.globalState);
    this.globalState.emit('change', selectedKind, selectedStory);
    return preview;
  }

  // You must implement this public API.
  handleAPI(api) {
    this.api = api;
    this.api.setOptions({
      name : 'REACT-STORYBOOK',
    });

    // set stories
    this.api.setStories([
      {
        kind: 'Component 1',
        stories: ['State 1', 'State 2']
      },

      {
        kind: 'Component 2',
        stories: ['State a', 'State b']
      }
    ]);

    // listen to the story change and update the preview.
    this.api.onStory((kind, story) => {
      this.globalState.emit('change', kind, story);
    });
  }

  _handlePreviewEvents() {
    this.globalState.removeAllListeners();

    // jumping to an story.
    this.globalState.on('jump', (kind, story) => {
      this.api.selectStory(kind, story);
    });

    // calling a shortcut functionality.
    this.globalState.on('toggleFullscreen', () => {
      const event = {
        ctrlKey: true,
        shiftKey: true,
        keyCode: keycode('F'),
        preventDefault() {},
      };
      const parsedEvent = parseKeyEvent(event);
      this.api.handleShortcut(parsedEvent);
    });
  }
}
