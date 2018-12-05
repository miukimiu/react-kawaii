import React, { Component } from 'react';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Styled from 'rsg-components/Styled';
import cx from 'classnames';
import Sidebar from './common/Sidebar';
import ToggleMenu from './common/ToggleMenu';
import Version from 'rsg-components/Version';
import Footer from './common/Footer';
import menuIcon from './assets/images/menu.svg';
import menuClose from './assets/images/close.svg';

ReactGA.initialize('UA-33231065-2');
ReactGA.pageview(window.location.pathname + window.location.search);

const styles = ({
  color,
  fontFamily,
  fontSize,
  sidebarWidth,
  mq,
  space,
  maxWidth
}) => ({
  root: {
    backgroundColor: color.baseBackground
  },
  hasSidebar: {
    paddingLeft: sidebarWidth,
    [mq.small]: {
      paddingLeft: 0
    }
  },

  main: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  sidebar: {
    backgroundColor: '#fff',
    border: [[color.border, 'solid']],
    borderWidth: [[0, 1, 0, 0]],
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    width: sidebarWidth,
    overflow: 'auto',
    '-webkit-overflow-scrolling': 'touch',
    [mq.small]: {
      position: 'static',
      width: 'auto',
      borderWidth: [[1, 0, 0, 0]],
      paddingBottom: space[0]
    }
  },
  logo: {
    padding: space[2],
    borderBottom: [[1, color.border, 'solid']]
  },
  footer: {
    display: 'block',
    color: color.light,
    fontFamily: fontFamily.base,
    fontSize: fontSize.small
  }
});

class StyleGuideRenderer extends Component {
  state = {
    menuActive: false
  };
  render() {
    const {
      classes,
      title,
      version,
      homepageUrl,
      children,
      toc,
      hasSidebar
    } = this.props;

    const toggleMenu = () => {
      this.setState({ menuActive: !this.state.menuActive });
    };

    return (
      <div className={cx(classes.root, hasSidebar && classes.hasSidebar)}>
        <main className={classes.main}>
          <ToggleMenu>
            <a onClick={toggleMenu}>
              <img src={menuIcon} className="menu" />
            </a>
          </ToggleMenu>
          {children}
          <Footer />
        </main>
        {hasSidebar && (
          <Sidebar menuActive={this.state.menuActive}>
            <a onClick={toggleMenu}>
              <img src={menuClose} className="close" />
            </a>
            <div className={`${classes.logo} logo`}>
              <Logo />
              {version && <Version>{version}</Version>}
            </div>
            {toc}
          </Sidebar>
        )}
      </div>
    );
  }
}

StyleGuideRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  version: PropTypes.string,
  homepageUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  toc: PropTypes.node.isRequired,
  hasSidebar: PropTypes.bool
};

export default Styled(styles)(StyleGuideRenderer);
