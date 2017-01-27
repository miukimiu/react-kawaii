'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  empty: (0, _extends3.default)({
    flex: 1,
    display: 'flex'
  }, _theme.baseFonts, {
    fontSize: 11,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    alignItems: 'center',
    justifyContent: 'center'
  }),

  wrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    borderRadius: 4,
    border: 'solid 1px rgb(236, 236, 236)',
    marginTop: 5,
    width: '100%'
  },

  tabbar: {
    display: 'flex',
    flexWrap: 'wrap',
    borderBottom: 'solid 1px #eaeaea'
  },

  content: {
    flex: 1,
    display: 'flex',
    overflow: 'auto'
  },

  tablink: (0, _extends3.default)({}, _theme.baseFonts, {
    fontSize: 11,
    letterSpacing: '1px',
    padding: '10px 15px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: 'opacity 0.3s',
    opacity: 0.5
  }),

  activetab: {
    opacity: 1
  }
};