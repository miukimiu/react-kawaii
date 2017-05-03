'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _paths = require('./paths');

var _paths2 = _interopRequireDefault(_paths);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KawaiiPlanet = function KawaiiPlanet(_ref) {
  var size = _ref.size,
      mood = _ref.mood,
      color = _ref.color;
  return _react2.default.createElement(
    'svg',
    { width: size, height: size, viewBox: '114 94 151 150', version: '1.1', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink' },
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', { d: _paths2.default.path1, id: 'kawaii-planet__path-1' }),
      _react2.default.createElement('path', { d: _paths2.default.path2, id: 'kawaii-planet__path-3' }),
      _react2.default.createElement('path', { d: _paths2.default.path3, id: 'kawaii-planet__path-5' })
    ),
    _react2.default.createElement(
      'g',
      {
        id: 'kawaii-planet',
        stroke: 'none',
        strokeWidth: '1',
        fill: 'none',
        fillRule: 'evenodd',
        transform: 'translate(115.000000, 94.000000)'
      },
      _react2.default.createElement(
        'g',
        { id: 'kawaii-planet__body-color', transform: 'translate(8.000000, 8.000000)' },
        _react2.default.createElement(
          'mask',
          { id: 'kawaii-planet__mask-2', fill: 'white' },
          _react2.default.createElement('use', { xlinkHref: '#kawaii-planet__path-1' })
        ),
        _react2.default.createElement('use', { id: 'kp-body-color-', fill: color, xlinkHref: '#kawaii-planet__path-1' }),
        _react2.default.createElement(
          'mask',
          { id: 'kawaii-planet__mask-4', fill: 'white' },
          _react2.default.createElement('use', { xlinkHref: '#kawaii-planet__path-3' })
        ),
        _react2.default.createElement('use', {
          id: 'kp-body-color-darker',
          fill: '#111111',
          opacity: '0.233908582',
          xlinkHref: '#kawaii-planet__path-3'
        })
      ),
      _react2.default.createElement(
        'g',
        { id: 'kawaii-planet__face', transform: 'translate(42.000000, 65.000000)' },
        _react2.default.createElement(
          'g',
          { id: 'kawaii-planet__mouth', transform: 'translate(18.000000, 16.000000)' },
          (mood === 'blissful' || mood === 'lovestruck') && _react2.default.createElement(
            'g',
            { id: 'kp-mouth__joy', transform: 'translate(0.000000, 1.000000)' },
            _react2.default.createElement(
              'mask',
              { id: 'kawaii-planet__mask-6', fill: 'white' },
              _react2.default.createElement('use', { xlinkHref: '#kawaii-planet__path-5' })
            ),
            _react2.default.createElement('use', { id: 'Combined-Shape', fill: '#000000', xlinkHref: '#kawaii-planet__path-5' }),
            _react2.default.createElement('path', { d: _paths2.default.tongue, id: 'kawaii-planet__tongue', fill: '#E74144', mask: 'url(#kawaii-planet__mask-6)', transform: 'translate(15.000000, 11.431885) scale(1, -1) translate(-15.000000, -11.431885) ' })
          ),
          mood === 'happy' && _react2.default.createElement('path', { d: _paths2.default.happy, id: 'kp-mouth__happy', stroke: 'none', fill: '#000000', fillRule: 'evenodd' }),
          mood === 'shocked' && _react2.default.createElement('circle', { id: 'kp-mouth__shocked', stroke: 'none', fill: '#000000', fillRule: 'evenodd', cx: '15.5', cy: '14.5', r: '7.5' }),
          mood === 'sad' && _react2.default.createElement('path', { d: _paths2.default.sad, id: 'kp-mouth__sad', stroke: 'none', fill: '#000000', fillRule: 'evenodd', transform: 'translate(14.999999, 5.500000) scale(1, -1) translate(-14.999999, -5.500000) ' })
        ),
        _react2.default.createElement(
          'g',
          { id: 'kawaii-planet__blush', transform: 'translate(0.000000, 15.000000)', fill: '#000000', opacity: '0.2' },
          _react2.default.createElement('circle', { id: 'Oval', cx: '3', cy: '3', r: '3' }),
          _react2.default.createElement('circle', { id: 'Oval', cx: '63', cy: '3', r: '3' })
        ),
        _react2.default.createElement(
          'g',
          { id: 'kawaii-planet__eyes', transform: 'translate(2.000000, 0.000000)', fill: '#000000' },
          mood === 'blissful' && _react2.default.createElement(
            'g',
            { id: 'kp-eyes__arc', transform: 'translate(1.000000, 0.000000)' },
            _react2.default.createElement('path', { d: _paths2.default.bliss1, id: 'Fill-5' }),
            _react2.default.createElement('path', { d: _paths2.default.bliss2, id: 'Fill-5' })
          ),
          (mood === 'happy' || mood === 'sad') && _react2.default.createElement(
            'g',
            { id: 'kp-eyes__circle', transform: 'translate(3.000000, 2.000000)', fill: '#000000' },
            _react2.default.createElement('circle', { id: 'Oval-3', cx: '4.5', cy: '4.5', r: '4.5' }),
            _react2.default.createElement('circle', { id: 'Oval-3', cx: '51.5', cy: '4.5', r: '4.5' })
          ),
          mood === 'lovestruck' && _react2.default.createElement(
            'g',
            { id: 'kp-eyes__heart', transform: 'translate(0.000000, 2.000000)', fillRule: 'nonzero', fill: '#000000' },
            _react2.default.createElement('path', { d: _paths2.default.love1, id: 'Shape' }),
            _react2.default.createElement('path', { d: _paths2.default.love2, id: 'Shape' })
          ),
          mood === 'shocked' && _react2.default.createElement(
            'g',
            { id: 'kp-eyes__cross', transform: 'translate(3.000000, 0.000000)', fill: '#000000' },
            _react2.default.createElement('path', { d: _paths2.default.shocked1, id: 'Combined-Shape' }),
            _react2.default.createElement('path', { d: _paths2.default.shocked2, id: 'Combined-Shape' })
          )
        )
      )
    )
  );
};

KawaiiPlanet.propTypes = {
  /**
    * Size of the width
    */
  size: _react2.default.PropTypes.number,
  mood: _react2.default.PropTypes.oneOf(['sad', 'shocked', 'happy', 'blissful', 'lovestruck']),
  /**
    * Hex color
    */
  color: _react2.default.PropTypes.string
};

KawaiiPlanet.defaultProps = {
  size: 150,
  mood: 'blissful',
  color: '#83D1FB'
};

var _default = KawaiiPlanet;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(KawaiiPlanet, 'KawaiiPlanet', 'src/components/KawaiiPlanet/KawaiiPlanet.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/KawaiiPlanet/KawaiiPlanet.jsx');
}();

;