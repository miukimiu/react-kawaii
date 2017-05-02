'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _paths = require('./paths');

var _paths2 = _interopRequireDefault(_paths);

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KawaiiIceCream = function (_Component) {
  _inherits(KawaiiIceCream, _Component);

  function KawaiiIceCream(props) {
    _classCallCheck(this, KawaiiIceCream);

    var _this = _possibleConstructorReturn(this, (KawaiiIceCream.__proto__ || Object.getPrototypeOf(KawaiiIceCream)).call(this, props));

    _this.state = { hover: false };
    _this.mouseOver = _this.mouseOver.bind(_this);
    return _this;
  }

  _createClass(KawaiiIceCream, [{
    key: 'mouseOver',
    value: function mouseOver() {
      this.setState({ hover: !this.state.hover });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          style: { width: this.props.size, height: this.props.size * 1.83 },
          className: 'wrapper',
          onMouseOver: this.mouseOver,
          onMouseOut: this.mouseOver
        },
        _react2.default.createElement(
          'svg',
          { width: this.props.size, height: this.props.size * 1.83, viewBox: '209 278 119 220', version: '1.1', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink' },
          _react2.default.createElement(
            'defs',
            null,
            _react2.default.createElement('path', { d: _paths2.default.defs, id: 'kawaii-iceCream__path-1' })
          ),
          _react2.default.createElement(
            'g',
            {
              id: 'kawaii-iceCream', stroke: 'none', strokeWidth: '1',
              fill: 'none', fillRule: 'evenodd', transform: 'translate(218.000000, 278.000000)'
            },
            _react2.default.createElement(
              'g',
              { id: 'kawaii-iceCream__body', fillRule: 'nonzero' },
              _react2.default.createElement('path', { d: _paths2.default.stick, id: 'kawaii-iceCream__body__stick', fill: '#FCCB7E' }),
              _react2.default.createElement('path', { d: _paths2.default.body, id: 'kawaii-iceCream__body__color', fill: this.props.color }),
              _react2.default.createElement('path', {
                d: _paths2.default.bodyShadow, id: 'kawaii-iceCream__body__shadow',
                fill: '#111111', opacity: '0.2'
              })
            ),
            _react2.default.createElement(
              'g',
              { id: 'kawaii-iceCream__face', transform: 'translate(22.000000, 81.000000)' },
              _react2.default.createElement(
                'g',
                { id: 'kawaii-iceCream__mouth', transform: 'translate(18.000000, 16.000000)' },
                (this.props.mood === 'blissful' || this.props.mood === 'lovestruck') && _react2.default.createElement(
                  'g',
                  { id: 'kawaii-iceCream__mouth__joy', transform: 'translate(0.000000, 1.000000)' },
                  _react2.default.createElement(
                    'mask',
                    { id: 'kawaii-iceCream__mask-2', fill: 'white' },
                    _react2.default.createElement('use', { xlinkHref: '#kawaii-iceCream__path-1' })
                  ),
                  _react2.default.createElement('use', { id: 'Combined-Shape', fill: '#000000', xlinkHref: '#kawaii-iceCream__path-1' }),
                  _react2.default.createElement('path', {
                    d: _paths2.default.tongue,
                    id: 'kawaii-iceCream__tongue',
                    fill: '#E74144', mask: 'url(#kawaii-iceCream__mask-2)',
                    transform: 'translate(15.000000, 11.431885) scale(1, -1) translate(-15.000000, -11.431885)'
                  })
                ),
                this.props.mood === 'happy' && _react2.default.createElement('path', { d: _paths2.default.happy, id: 'kawaii-iceCream__mouth__happy', fill: '#000000' }),
                this.props.mood === 'shocked' && _react2.default.createElement('circle', {
                  id: 'kawaii-iceCream__mouth__shocked',
                  fill: '#000000', cx: '15.5', cy: '14.5', r: '7.5'
                }),
                this.props.mood === 'sad' && _react2.default.createElement('path', {
                  d: _paths2.default.sad,
                  id: 'kawaii-iceCream__mouth__sad',
                  fill: '#000000',
                  transform: 'translate(14.999999, 5.500000) scale(1, -1) translate(-14.999999, -5.500000)'
                })
              ),
              _react2.default.createElement(
                'g',
                {
                  id: 'kawaii-iceCream__blush',
                  transform: 'translate(0.000000, 15.000000)',
                  fill: '#000000',
                  opacity: '0.2'
                },
                _react2.default.createElement('circle', { id: 'Oval', cx: '3', cy: '3', r: '3' }),
                _react2.default.createElement('circle', { id: 'Oval', cx: '63', cy: '3', r: '3' })
              ),
              _react2.default.createElement(
                'g',
                {
                  id: 'kawaii-iceCream__eyes',
                  transform: 'translate(2.000000, 0.000000)', fill: '#000000'
                },
                this.props.mood === 'blissful' && _react2.default.createElement(
                  'g',
                  { id: 'kawaii-iceCream__eyes__arc', transform: 'translate(1.000000, 0.000000)' },
                  _react2.default.createElement('path', { d: _paths2.default.bliss1, id: 'Fill-5' }),
                  _react2.default.createElement('path', { d: _paths2.default.bliss2, id: 'Fill-5' })
                ),
                (this.props.mood === 'happy' || this.props.mood === 'sad') && _react2.default.createElement(
                  'g',
                  { id: 'kawaii-iceCream__eyes__circle', transform: 'translate(3.000000, 2.000000)' },
                  _react2.default.createElement('circle', { id: 'Oval-3', cx: '4.5', cy: '4.5', r: '4.5' }),
                  _react2.default.createElement('circle', { id: 'Oval-3', cx: '51.5', cy: '4.5', r: '4.5' })
                ),
                this.props.mood === 'lovestruck' && _react2.default.createElement(
                  'g',
                  {
                    id: 'kawaii-iceCream__eyes__heart',
                    transform: 'translate(0.000000, 2.000000)',
                    fillRule: 'nonzero'
                  },
                  _react2.default.createElement('path', { d: _paths2.default.lovestruck1, id: 'Shape' }),
                  _react2.default.createElement('path', { d: _paths2.default.lovestruck2, id: 'Shape' })
                ),
                this.props.mood === 'shocked' && _react2.default.createElement(
                  'g',
                  { id: 'kawaii-iceCream__eyes__cross', transform: 'translate(3.000000, 0.000000)' },
                  _react2.default.createElement('path', { d: _paths2.default.shocked1, id: 'Combined-Shape' }),
                  _react2.default.createElement('path', { d: _paths2.default.shocked2, id: 'Combined-Shape' })
                )
              )
            )
          )
        ),
        this.state.hover && this.props.hoverText && _react2.default.createElement(
          'div',
          {
            style: {
              left: this.props.size,
              top: this.props.size * 1.83 / 3.5,
              width: this.props.size * 0.65,
              minHeight: this.props.size / 3.3
            },
            className: 'speech'
          },
          _react2.default.createElement(
            'span',
            { className: 'text' },
            this.props.hoverText
          )
        )
      );
    }
  }]);

  return KawaiiIceCream;
}(_react.Component);

KawaiiIceCream.propTypes = {
  /**
  * Size of the width
  */
  size: _react2.default.PropTypes.number,
  mood: _react2.default.PropTypes.oneOf(['sad', 'shocked', 'happy', 'blissful', 'lovestruck']),
  /**
  * Hex color
  */
  color: _react2.default.PropTypes.string,
  /**
   * Set the text to show on the speech bubble on hover
   */
  hoverText: _react2.default.PropTypes.string
};

KawaiiIceCream.defaultProps = {
  size: 120,
  mood: 'blissful',
  color: '#FDA7DC',
  hoverText: null
};

var _default = KawaiiIceCream;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(KawaiiIceCream, 'KawaiiIceCream', 'src/components/KawaiiIceCream/KawaiiIceCream.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/KawaiiIceCream/KawaiiIceCream.jsx');
}();

;