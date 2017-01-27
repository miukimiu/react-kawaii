'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _toConsumableArray = require('babel-runtime/helpers/to-consumable-array')['default'];

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodashDebounce = require('lodash.debounce');

var _lodashDebounce2 = _interopRequireDefault(_lodashDebounce);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _autoprefix = require('./autoprefix');

var _autoprefix2 = _interopRequireDefault(_autoprefix);

function autoprefixes(styles) {
  return _Object$keys(styles).reduce(function (obj, key) {
    return (obj[key] = (0, _autoprefix2['default'])(styles[key]), obj);
  }, {});
}

var styles = autoprefixes({
  wrapper: {
    position: 'fixed',
    width: 0,
    height: 0,
    top: 0,
    left: 0
  },

  dim: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 0,
    background: 'rgba(0, 0, 0, 0.2)',
    opacity: 1
  },

  dimAppear: {
    opacity: 0
  },

  dimTransparent: {
    pointerEvents: 'none'
  },

  dimHidden: {
    opacity: 0
  },

  dock: {
    position: 'fixed',
    zIndex: 1,
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
    background: 'white',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
  },

  dockHidden: {
    opacity: 0
  },

  dockResizing: {
    transition: 'none'
  },

  dockContent: {
    width: '100%',
    height: '100%',
    overflow: 'auto'
  },

  resizer: {
    position: 'absolute',
    zIndex: 2,
    opacity: 0
  }
});

function getTransitions(duration) {
  return ['left', 'top', 'width', 'height'].map(function (p) {
    return p + ' ' + duration / 1000 + 's ease-out';
  });
}

function getDockStyles(_ref, _ref2) {
  var fluid = _ref.fluid;
  var dockStyle = _ref.dockStyle;
  var dockHiddenStyle = _ref.dockHiddenStyle;
  var duration = _ref.duration;
  var position = _ref.position;
  var isVisible = _ref.isVisible;
  var size = _ref2.size;
  var isResizing = _ref2.isResizing;
  var fullWidth = _ref2.fullWidth;
  var fullHeight = _ref2.fullHeight;

  var posStyle = undefined;
  var absSize = fluid ? size * 100 + '%' : size + 'px';

  function getRestSize(fullSize) {
    return fluid ? 100 - size * 100 + '%' : fullSize - size + 'px';
  }

  switch (position) {
    case 'left':
      posStyle = {
        width: absSize,
        left: isVisible ? 0 : '-' + absSize
      };
      break;
    case 'right':
      posStyle = {
        left: isVisible ? getRestSize(fullWidth) : fullWidth,
        width: absSize
      };
      break;
    case 'top':
      posStyle = {
        top: isVisible ? 0 : '-' + absSize,
        height: absSize
      };
      break;
    case 'bottom':
      posStyle = {
        top: isVisible ? getRestSize(fullHeight) : fullHeight,
        height: absSize
      };
      break;
  }

  var transitions = getTransitions(duration);

  return [styles.dock, (0, _autoprefix2['default'])({
    transition: [].concat(_toConsumableArray(transitions), [!isVisible && 'opacity 0.01s linear ' + duration / 1000 + 's']).filter(function (t) {
      return t;
    }).join(',')
  }), dockStyle, (0, _autoprefix2['default'])(posStyle), isResizing && styles.dockResizing, !isVisible && styles.dockHidden, !isVisible && dockHiddenStyle];
}

function getDimStyles(_ref3, _ref4) {
  var dimMode = _ref3.dimMode;
  var dimStyle = _ref3.dimStyle;
  var duration = _ref3.duration;
  var isVisible = _ref3.isVisible;
  var isTransitionStarted = _ref4.isTransitionStarted;

  return [styles.dim, (0, _autoprefix2['default'])({
    transition: 'opacity ' + duration / 1000 + 's ease-out'
  }), dimStyle, dimMode === 'transparent' && styles.dimTransparent, !isVisible && styles.dimHidden, isTransitionStarted && isVisible && styles.dimAppear, isTransitionStarted && !isVisible && styles.dimDisappear];
}

function getResizerStyles(position) {
  var resizerStyle = undefined;
  var size = 10;

  switch (position) {
    case 'left':
      resizerStyle = {
        right: -size / 2,
        width: size,
        top: 0,
        height: '100%',
        cursor: 'col-resize'
      };
      break;
    case 'right':
      resizerStyle = {
        left: -size / 2,
        width: size,
        top: 0,
        height: '100%',
        cursor: 'col-resize'
      };
      break;
    case 'top':
      resizerStyle = {
        bottom: -size / 2,
        height: size,
        left: 0,
        width: '100%',
        cursor: 'row-resize'
      };
      break;
    case 'bottom':
      resizerStyle = {
        top: -size / 2,
        height: size,
        left: 0,
        width: '100%',
        cursor: 'row-resize'
      };
      break;
  }

  return [styles.resizer, (0, _autoprefix2['default'])(resizerStyle)];
}

function getFullSize(position, fullWidth, fullHeight) {
  return position === 'left' || position === 'right' ? fullWidth : fullHeight;
}

var Dock = (function (_Component) {
  _inherits(Dock, _Component);

  function Dock(props) {
    var _this = this;

    _classCallCheck(this, Dock);

    _get(Object.getPrototypeOf(Dock.prototype), 'constructor', this).call(this, props);

    this.transitionEnd = function () {
      _this.setState({ isTransitionStarted: false });
    };

    this.hideDim = function () {
      if (!_this.props.isVisible) {
        _this.setState({ isDimHidden: true });
      }
    };

    this.handleDimClick = function () {
      if (_this.props.dimMode === 'opaque') {
        _this.props.onVisibleChange && _this.props.onVisibleChange(false);
      }
    };

    this.handleResize = function () {
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(_this.updateWindowSize.bind(_this, true));
      } else {
        _this.updateWindowSize(true);
      }
    };

    this.updateWindowSize = function (windowResize) {
      var sizeState = {
        fullWidth: window.innerWidth,
        fullHeight: window.innerHeight
      };

      if (windowResize) {
        _this.setState(_extends({}, sizeState, {
          isResizing: true,
          isWindowResizing: windowResize
        }));

        _this.debouncedUpdateWindowSizeEnd();
      } else {
        _this.setState(sizeState);
      }
    };

    this.updateWindowSizeEnd = function () {
      _this.setState({
        isResizing: false,
        isWindowResizing: false
      });
    };

    this.debouncedUpdateWindowSizeEnd = (0, _lodashDebounce2['default'])(this.updateWindowSizeEnd, 30);

    this.handleWrapperLeave = function () {
      _this.setState({ isResizing: false });
    };

    this.handleMouseDown = function () {
      _this.setState({ isResizing: true });
    };

    this.handleMouseUp = function () {
      _this.setState({ isResizing: false });
    };

    this.handleMouseMove = function (e) {
      if (!_this.state.isResizing || _this.state.isWindowResizing) return;
      e.preventDefault();

      var _props = _this.props;
      var position = _props.position;
      var fluid = _props.fluid;
      var _state = _this.state;
      var fullWidth = _state.fullWidth;
      var fullHeight = _state.fullHeight;
      var isControlled = _state.isControlled;
      var x = e.clientX;
      var y = e.clientY;

      var size = undefined;

      switch (position) {
        case 'left':
          size = fluid ? x / fullWidth : x;
          break;
        case 'right':
          size = fluid ? (fullWidth - x) / fullWidth : fullWidth - x;
          break;
        case 'top':
          size = fluid ? y / fullHeight : y;
          break;
        case 'bottom':
          size = fluid ? (fullHeight - y) / fullHeight : fullHeight - y;
          break;
      }

      _this.props.onSizeChange && _this.props.onSizeChange(size);

      if (!isControlled) {
        _this.setState({ size: size });
      }
    };

    this.state = {
      isControlled: typeof props.size !== 'undefined',
      size: props.size || props.defaultSize,
      isDimHidden: !props.isVisible,
      fullWidth: typeof window !== 'undefined' && window.innerWidth,
      fullHeight: typeof window !== 'undefined' && window.innerHeight,
      isTransitionStarted: false,
      isWindowResizing: false
    };
  }

  _createClass(Dock, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('mouseup', this.handleMouseUp);
      window.addEventListener('mousemove', this.handleMouseMove);
      window.addEventListener('resize', this.handleResize);

      if (!window.fullWidth) {
        this.updateWindowSize();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('mouseup', this.handleMouseUp);
      window.removeEventListener('mousemove', this.handleMouseMove);
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var isControlled = typeof nextProps.size !== 'undefined';

      this.setState({ isControlled: isControlled });

      if (isControlled && this.props.size !== nextProps.size) {
        this.setState({ size: nextProps.size });
      } else if (this.props.fluid !== nextProps.fluid) {
        this.updateSize(nextProps);
      }

      if (this.props.isVisible !== nextProps.isVisible) {
        this.setState({
          isTransitionStarted: true
        });
      }
    }
  }, {
    key: 'updateSize',
    value: function updateSize(props) {
      var _state2 = this.state;
      var fullWidth = _state2.fullWidth;
      var fullHeight = _state2.fullHeight;

      this.setState({
        size: props.fluid ? this.state.size / getFullSize(props.position, fullWidth, fullHeight) : getFullSize(props.position, fullWidth, fullHeight) * this.state.size
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (this.props.isVisible !== prevProps.isVisible) {
        if (!this.props.isVisible) {
          window.setTimeout(function () {
            return _this2.hideDim();
          }, this.props.duration);
        } else {
          this.setState({ isDimHidden: false });
        }

        window.setTimeout(function () {
          return _this2.setState({ isTransitionStarted: false });
        }, 0);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var children = _props2.children;
      var zIndex = _props2.zIndex;
      var dimMode = _props2.dimMode;
      var position = _props2.position;
      var isVisible = _props2.isVisible;
      var _state3 = this.state;
      var isResizing = _state3.isResizing;
      var size = _state3.size;
      var isDimHidden = _state3.isDimHidden;

      var dimStyles = _objectAssign2['default'].apply(undefined, [{}].concat(_toConsumableArray(getDimStyles(this.props, this.state))));
      var dockStyles = _objectAssign2['default'].apply(undefined, [{}].concat(_toConsumableArray(getDockStyles(this.props, this.state))));
      var resizerStyles = _objectAssign2['default'].apply(undefined, [{}].concat(_toConsumableArray(getResizerStyles(position))));

      return _react2['default'].createElement(
        'div',
        { style: (0, _objectAssign2['default'])({}, styles.wrapper, { zIndex: zIndex }) },
        dimMode !== 'none' && !isDimHidden && _react2['default'].createElement('div', { style: dimStyles, onClick: this.handleDimClick }),
        _react2['default'].createElement(
          'div',
          { style: dockStyles },
          _react2['default'].createElement('div', { style: resizerStyles,
            onMouseDown: this.handleMouseDown }),
          _react2['default'].createElement(
            'div',
            { style: styles.dockContent },
            typeof children === 'function' ? children({
              position: position,
              isResizing: isResizing,
              size: size,
              isVisible: isVisible
            }) : children
          )
        )
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      position: _react.PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
      zIndex: _react.PropTypes.number,
      fluid: _react.PropTypes.bool,
      size: _react.PropTypes.number,
      defaultSize: _react.PropTypes.number,
      dimMode: _react.PropTypes.oneOf(['none', 'transparent', 'opaque']),
      isVisible: _react.PropTypes.bool,
      onVisibleChange: _react.PropTypes.func,
      onSizeChange: _react.PropTypes.func,
      dimStyle: _react.PropTypes.object,
      dockStyle: _react.PropTypes.object,
      duration: _react.PropTypes.number
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      position: 'left',
      zIndex: 99999999,
      fluid: true,
      defaultSize: 0.3,
      dimMode: 'opaque',
      duration: 200
    },
    enumerable: true
  }]);

  return Dock;
})(_react.Component);

exports['default'] = Dock;
module.exports = exports['default'];