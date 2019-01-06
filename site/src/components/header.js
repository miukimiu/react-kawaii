import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import remcalc from 'remcalc';
import PropTypes from 'prop-types';
import logo from '../images/reactKawaii-text-logo.svg';

const HeaderEl = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: ${props => props.theme.sky};
  align-items: center;
  justify-content: center;

  .nav {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 1184px;
    padding: ${remcalc(10)} 0};
    align-items: center;
  }

  &,
  .nav,
  .nav_list {
    display: flex;
  }

  .logo a,
  .main-nav a {
    padding: 10px 15px;
    text-transform: uppercase;
    text-align: center;
    display: block;
  }

  main-nav {
    a {
      font-size: ${remcalc(20)};
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

const Header = () => (
  <HeaderEl>
    <nav className="nav">
      <Link to="/">
        <img src={logo} alt="React Kawaii Logo" />
      </Link>

      <ul className="nav_list">
        <li>
          <Link to="/components/">Components</Link>
        </li>
        <li>
          <Link to="/docs/">Docs</Link>
        </li>
        <li>
          <a href="https://github.com/miukimiu/react-kawaii">GitHub</a>
        </li>
      </ul>
    </nav>
  </HeaderEl>
);

export default Header;
