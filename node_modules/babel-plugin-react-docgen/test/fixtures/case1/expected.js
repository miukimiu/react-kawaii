'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TOUCHSTART_TIMEOUT = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _reactMomentProptypes = require('react-moment-proptypes');

var _reactMomentProptypes2 = _interopRequireDefault(_reactMomentProptypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOUCHSTART_TIMEOUT = exports.TOUCHSTART_TIMEOUT = 200;

var propTypes = {
  day: _reactMomentProptypes2.default.momentObj,
  modifiers: _react.PropTypes.arrayOf(_react.PropTypes.string),
  onDayClick: _react.PropTypes.func,
  onDayMouseDown: _react.PropTypes.func,
  onDayMouseUp: _react.PropTypes.func,
  onDayMouseEnter: _react.PropTypes.func,
  onDayMouseLeave: _react.PropTypes.func,
  onDayTouchStart: _react.PropTypes.func,
  onDayTouchEnd: _react.PropTypes.func,
  onDayTouchTap: _react.PropTypes.func,
  'hypen-dash': _react.PropTypes.string
};

var defaultProps = {
  day: (0, _moment2.default)(),
  modifiers: [],
  onDayClick: function onDayClick() {},
  onDayMouseDown: function onDayMouseDown() {},
  onDayMouseUp: function onDayMouseUp() {},
  onDayMouseEnter: function onDayMouseEnter() {},
  onDayMouseLeave: function onDayMouseLeave() {},
  onDayTouchStart: function onDayTouchStart() {},
  onDayTouchEnd: function onDayTouchEnd() {},
  onDayTouchTap: function onDayTouchTap() {},

  'hypen-dash': 'hello'
};

var CalendarDay = function (_React$Component) {
  _inherits(CalendarDay, _React$Component);

  function CalendarDay(props) {
    _classCallCheck(this, CalendarDay);

    var _this = _possibleConstructorReturn(this, (CalendarDay.__proto__ || Object.getPrototypeOf(CalendarDay)).call(this, props));

    _this.hasActiveTouchStart = false;
    return _this;
  }

  _createClass(CalendarDay, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
    }
  }, {
    key: 'handleDayClick',
    value: function handleDayClick(day, modifiers, e) {
      this.props.onDayClick(day, modifiers, e);
    }
  }, {
    key: 'handleDayMouseDown',
    value: function handleDayMouseDown(day, modifiers, e) {
      this.props.onDayMouseDown(day, modifiers, e);
    }
  }, {
    key: 'handleDayMouseUp',
    value: function handleDayMouseUp(day, modifiers, e) {
      this.props.onDayMouseUp(day, modifiers, e);
    }
  }, {
    key: 'handleDayMouseEnter',
    value: function handleDayMouseEnter(day, modifiers, e) {
      this.props.onDayMouseEnter(day, modifiers, e);
    }
  }, {
    key: 'handleDayMouseLeave',
    value: function handleDayMouseLeave(day, modifiers, e) {
      this.props.onDayMouseLeave(day, modifiers, e);
    }
  }, {
    key: 'handleDayTouchStart',
    value: function handleDayTouchStart(day, modifiers, e) {
      var _this2 = this;

      this.hasActiveTouchStart = true;
      setTimeout(function () {
        _this2.hasActiveTouchStart = false;
      }, TOUCHSTART_TIMEOUT);

      this.props.onDayTouchStart(day, modifiers, e);
    }
  }, {
    key: 'handleDayTouchEnd',
    value: function handleDayTouchEnd(day, modifiers, e) {
      if (this.hasActiveTouchStart) {
        this.hasActiveTouchStart = false;
        this.handleDayTouchTap(day, modifiers, e);
      }

      this.props.onDayTouchEnd(day, modifiers, e);
    }
  }, {
    key: 'handleDayTouchTap',
    value: function handleDayTouchTap(day, modifiers, e) {
      this.props.onDayTouchTap(day, modifiers, e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          day = _props.day,
          modifiers = _props.modifiers;


      return _react2.default.createElement(
        'div',
        {
          className: 'CalendarDay',
          onMouseEnter: function onMouseEnter(e) {
            return _this3.handleDayMouseEnter(day, modifiers, e);
          },
          onMouseLeave: function onMouseLeave(e) {
            return _this3.handleDayMouseLeave(day, modifiers, e);
          },
          onMouseDown: function onMouseDown(e) {
            return _this3.handleDayMouseDown(day, modifiers, e);
          },
          onMouseUp: function onMouseUp(e) {
            return _this3.handleDayMouseUp(day, modifiers, e);
          },
          onClick: function onClick(e) {
            return _this3.handleDayClick(day, modifiers, e);
          },
          onTouchStart: function onTouchStart(e) {
            return _this3.handleDayTouchStart(day, modifiers, e);
          },
          onTouchEnd: function onTouchEnd(e) {
            return _this3.handleDayTouchEnd(day, modifiers, e);
          }
        },
        _react2.default.createElement(
          'span',
          { className: 'CalendarDay__day' },
          day.format('D')
        )
      );
    }
  }]);

  return CalendarDay;
}(_react2.default.Component);

exports.default = CalendarDay;


CalendarDay.propTypes = propTypes;
CalendarDay.defaultProps = defaultProps;
CalendarDay.__docgenInfo = {
  'description': '',
  'props': {
    'day': {
      'type': {
        'name': 'custom',
        'raw': 'momentPropTypes.momentObj'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'moment()',
        'computed': true
      }
    },
    'modifiers': {
      'type': {
        'name': 'arrayOf',
        'value': {
          'name': 'string'
        }
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': '[]',
        'computed': false
      }
    },
    'onDayClick': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'function() {}',
        'computed': false
      }
    },
    'onDayMouseDown': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'function() {}',
        'computed': false
      }
    },
    'onDayMouseUp': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'function() {}',
        'computed': false
      }
    },
    'onDayMouseEnter': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'function() {}',
        'computed': false
      }
    },
    'onDayMouseLeave': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'function() {}',
        'computed': false
      }
    },
    'onDayTouchStart': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'function() {}',
        'computed': false
      }
    },
    'onDayTouchEnd': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'function() {}',
        'computed': false
      }
    },
    'onDayTouchTap': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'function() {}',
        'computed': false
      }
    },
    'hypen-dash': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': '\'hello\'',
        'computed': false
      }
    }
  }
};

if (typeof STORYBOOK_REACT_CLASSES !== 'undefined') {
  STORYBOOK_REACT_CLASSES['test/fixtures/case1/actual.js'] = {
    name: 'CalendarDay',
    docgenInfo: CalendarDay.__docgenInfo,
    path: 'test/fixtures/case1/actual.js'
  };
}
