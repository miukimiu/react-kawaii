import React, { Component } from 'react';
import paths from './paths';
import './style.scss';

class KawaiiIceCream extends Component {

  constructor(props) {
    super(props);
    this.state = { hover: false };
    this.mouseOver = this.mouseOver.bind(this);
  }

  mouseOver() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    return (
      <div
        style={{ width: this.props.size, height: this.props.size * 1.83 }}
        className="wrapper"
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOver}
      >
        <svg width={this.props.size} height={this.props.size * 1.83} viewBox="209 278 119 220" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <defs>
            <path d={paths.defs} id="kawaii-iceCream__path-1" />
          </defs>
          <g
            id="kawaii-iceCream" stroke="none" strokeWidth="1"
            fill="none" fillRule="evenodd" transform="translate(218.000000, 278.000000)"
          >
            <g id="kawaii-iceCream__body" fillRule="nonzero">
              <path d={paths.stick} id="kawaii-iceCream__body__stick" fill="#FCCB7E" />
              <path d={paths.body} id="kawaii-iceCream__body__color" fill={this.props.color} />
              <path
                d={paths.bodyShadow} id="kawaii-iceCream__body__shadow"
                fill="#111111" opacity="0.2"
              />
            </g>
            <g id="kawaii-iceCream__face" transform="translate(22.000000, 81.000000)">
              <g id="kawaii-iceCream__mouth" transform="translate(18.000000, 16.000000)">
                {(this.props.mood === 'blissful' || this.props.mood === 'lovestruck') && (
                <g id="kawaii-iceCream__mouth__joy" transform="translate(0.000000, 1.000000)">
                  <mask id="kawaii-iceCream__mask-2" fill="white">
                    <use xlinkHref="#kawaii-iceCream__path-1" />
                  </mask>
                  <use id="Combined-Shape" fill="#000000" xlinkHref="#kawaii-iceCream__path-1" />
                  <path
                    d={paths.tongue}
                    id="kawaii-iceCream__tongue"
                    fill="#E74144" mask="url(#kawaii-iceCream__mask-2)"
                    transform="translate(15.000000, 11.431885) scale(1, -1)
                          translate(-15.000000, -11.431885)"
                  />
                </g>
                  )}
                {this.props.mood === 'happy' && (
                <path d={paths.happy} id="kawaii-iceCream__mouth__happy" fill="#000000" />
                  )}
                {this.props.mood === 'shocked' && (
                <circle
                  id="kawaii-iceCream__mouth__shocked"
                  fill="#000000" cx="15.5" cy="14.5" r="7.5"
                />
                  )}
                {this.props.mood === 'sad' && (
                <path
                  d={paths.sad}
                  id="kawaii-iceCream__mouth__sad"
                  fill="#000000"
                  transform="translate(14.999999, 5.500000) scale(1, -1)
                        translate(-14.999999, -5.500000)"
                />
      )}
              </g>
              <g
                id="kawaii-iceCream__blush"
                transform="translate(0.000000, 15.000000)"
                fill="#000000"
                opacity="0.2"
              >
                <circle id="Oval" cx="3" cy="3" r="3" />
                <circle id="Oval" cx="63" cy="3" r="3" />
              </g>
              <g
                id="kawaii-iceCream__eyes"
                transform="translate(2.000000, 0.000000)" fill="#000000"
              >
                {this.props.mood === 'blissful' && (
                <g id="kawaii-iceCream__eyes__arc" transform="translate(1.000000, 0.000000)">
                  <path d={paths.bliss1} id="Fill-5" />
                  <path d={paths.bliss2} id="Fill-5" />
                </g>
                  )}
                {(this.props.mood === 'happy' || this.props.mood === 'sad') && (
                <g id="kawaii-iceCream__eyes__circle" transform="translate(3.000000, 2.000000)">
                  <circle id="Oval-3" cx="4.5" cy="4.5" r="4.5" />
                  <circle id="Oval-3" cx="51.5" cy="4.5" r="4.5" />
                </g>
                  )}
                {this.props.mood === 'lovestruck' && (
                <g
                  id="kawaii-iceCream__eyes__heart"
                  transform="translate(0.000000, 2.000000)"
                  fillRule="nonzero"
                >
                  <path d={paths.lovestruck1} id="Shape" />
                  <path d={paths.lovestruck2} id="Shape" />
                </g>
                  )}
                {this.props.mood === 'shocked' && (
                <g id="kawaii-iceCream__eyes__cross" transform="translate(3.000000, 0.000000)">
                  <path d={paths.shocked1} id="Combined-Shape" />
                  <path d={paths.shocked2} id="Combined-Shape" />
                </g>
                  )}
              </g>
            </g>
          </g>
        </svg>
        {this.state.hover && this.props.hoverText &&
        <div
          style={{
            left: this.props.size,
            top: (this.props.size * 1.83) / 3.5,
            width: this.props.size * 0.65,
            minHeight: this.props.size / 3.3,
          }}
          className="speech"
        >
          <span className="text">{this.props.hoverText}</span>
        </div>}
      </div>
    );
  }
}

KawaiiIceCream.propTypes = {
  /**
  * Size of the width
  */
  size: React.PropTypes.number,
  mood: React.PropTypes.oneOf(['sad', 'shocked', 'happy', 'blissful', 'lovestruck']),
  /**
  * Hex color
  */
  color: React.PropTypes.string,
  /**
   * Set the text to show on the speech bubble on hover
   */
  hoverText: React.PropTypes.string,
};

KawaiiIceCream.defaultProps = {
  size: 120,
  mood: 'blissful',
  color: '#FDA7DC',
  hoverText: null,
};

export default KawaiiIceCream;
