'use strict';

exports.__esModule = true;
exports.default = reducer;

var _actions = require('./actions');

var _constants = require('./constants');

var _react = require('react');

function position(props) {
  var state = arguments.length <= 1 || arguments[1] === undefined ? props.defaultPosition : arguments[1];
  var action = arguments[2];

  return action.type === _actions.CHANGE_POSITION ? _constants.POSITIONS[(_constants.POSITIONS.indexOf(state) + 1) % _constants.POSITIONS.length] : state;
}

function size(props) {
  var state = arguments.length <= 1 || arguments[1] === undefined ? props.defaultSize : arguments[1];
  var action = arguments[2];

  return action.type === _actions.CHANGE_SIZE ? action.size : state;
}

function isVisible(props) {
  var state = arguments.length <= 1 || arguments[1] === undefined ? props.defaultIsVisible : arguments[1];
  var action = arguments[2];

  return action.type === _actions.TOGGLE_VISIBILITY ? !state : state;
}

function childMonitorStates(props) {
  var state = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
  var action = arguments[2];

  return _react.Children.map(props.children, function (child, index) {
    return child.type.update(child.props, state[index], action);
  });
}

function childMonitorIndex(props) {
  var state = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
  var action = arguments[2];

  switch (action.type) {
    case _actions.CHANGE_MONITOR:
      return (state + 1) % _react.Children.count(props.children);
    default:
      return state;
  }
}

function reducer(props) {
  var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var action = arguments[2];

  if (!state.childMonitorStates) {
    _react.Children.forEach(props.children, function (child, index) {
      if (typeof child.type.update !== 'function') {
        console.error('Child of <DockMonitor> with the index ' + index + ' ' + ('(' + (child.type.displayName || child.type.name || child.type) + ') ') + 'does not appear to be a valid Redux DevTools monitor.');
      }
    });
  }

  return {
    position: position(props, state.position, action),
    isVisible: isVisible(props, state.isVisible, action),
    size: size(props, state.size, action),
    childMonitorIndex: childMonitorIndex(props, state.childMonitorIndex, action),
    childMonitorStates: childMonitorStates(props, state.childMonitorStates, action)
  };
}