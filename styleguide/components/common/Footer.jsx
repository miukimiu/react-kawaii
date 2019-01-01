import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import remcalc from 'remcalc';
import footerWave from '../assets/images/footer-wave.svg';
import logo from '../assets/images/ReactKawaii-logo.svg';
import twitter from '../assets/images/twitter.svg';
import github from '../assets/images/github.svg';

const Footer = styled.footer`
  display: flex;
  flex-shrink: 0;
  padding-bottom: ${remcalc(20)};
  background: #e7f6ff;
  position: relative;
  height: ${remcalc(180)};
  align-items: flex-end;

  > div > div > div {
    padding-top: ${remcalc(5)};
  }

  @media (max-width: 1000px) {
    text-align: center;
  }

  .generated {
    text-align: right;

    @media (max-width: 1000px) {
      text-align: center;
    }
  }

  .text-right {
    @media (max-width: 1000px) {
      text-align: center !important;
    }
  }

  > div {
    position: relative;
  }
`;

const Social = styled.a`
  padding-left: ${remcalc(10)};
`;

const Wave = styled.img`
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: auto;
`;

export default () => (
  <Footer>
    <Wave src={footerWave} />
    <Grid>
      <Row>
        <Col xs={12} lg={6}>
          <img src={logo} />
        </Col>
        <Col xs={12} lg={6} className="text-right">
          <Social href="https://twitter.com/miuki_miu">
            <img src={twitter} />
          </Social>
          <Social href="https://github.com/miukimiu/react-kawaii">
            <img src={github} />
          </Social>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={6}>
          Crafted by <a href="http://www.miukimiu.com/">Miuki Miu</a> {(new Date()).getFullYear()} MIT
        </Col>
        <Col xs={12} lg={6} className="text-right">
          Generated with{' '}
          <a href="https://react-styleguidist.js.org/">React Styleguidist</a>
        </Col>
      </Row>
    </Grid>
  </Footer>
);
