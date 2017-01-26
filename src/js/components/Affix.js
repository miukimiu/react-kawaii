import React, { Component, PropTypes } from 'react';

class Affix extends Component {

  static propTypes = {
    offset: PropTypes.number,
  };

  static defaultProps = {
    offset: 0,
  };

  constructor() {
    super();
    this.state = {
      affix: false,
      leftPosition: ''
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    const div = this.refs.affixEl;
    const rect = div.getBoundingClientRect();

    this.setState({
      leftPosition: rect.left,
    });


  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const affix = this.state.affix;
    const offset = this.props.offset;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (!affix && scrollTop >= offset) {
      this.setState({
        affix: true,
      });
    }

    if (affix && scrollTop < offset) {
      this.setState({
        affix: false,
      });
    }
  };

  render() {
    const affix = this.state.affix ? 'affix' : '';
    const { className, ...props } = this.props;
    const leftPosition = this.state.affix ? this.state.leftPosition : 'inherit';

    return (
      <div {...props} className={`${className || ''} ${affix}`} ref="affixEl" style={{left: leftPosition}}>
        {this.props.children}
      </div>
    );
  }
}

export default Affix;
