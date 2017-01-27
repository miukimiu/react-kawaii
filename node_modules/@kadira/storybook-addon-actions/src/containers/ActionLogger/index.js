import React from 'react';
import deepEqual from 'deep-equal';
import ActionLoggerComponent from '../../components/ActionLogger/';
import { EVENT_ID } from '../../';

export default class ActionLogger extends React.Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {actions: []};
    this._actionListener = action => this.addAction(action);
  }

  addAction(action) {
    action.data.args = action.data.args.map(arg => JSON.parse(arg));
    const actions = [...this.state.actions];
    const previous = actions.length && actions[0];
    if (previous && deepEqual(previous.data, action.data)) {
      previous.count++;
    } else {
      action.count = 1;
      actions.unshift(action);
    }
    this.setState({actions});
  }

  clearActions() {
    this.setState({actions: []});
  }

  componentDidMount() {
    this.props.channel.on(EVENT_ID, this._actionListener);
  }

  componentWillUnmount() {
    this.props.channel.removeListener(EVENT_ID, this._actionListener);
  }

  render() {
    const props = {
      actions: this.state.actions,
      onClear: () => this.clearActions(),
    };
    return <ActionLoggerComponent {...props} />;
  }
}
