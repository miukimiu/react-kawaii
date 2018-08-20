import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import remcalc from 'remcalc';
import footerWave from '../assets/images/footer-wave.svg';
import logo from '../assets/images/ReactKawaii-logo.svg';

const Footer = styled.footer`
  display: flex;
  flex-shrink: 0;
  padding: ${remcalc(80)} 0 ${remcalc(20)};
  background: #e7f6ff;
  position: relative;

  .generated {
    text-align: right;
  }

  > div {
    position: relative;
  }
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
        <Col xs={12}>
          <img src={logo} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={6}>
          Created by Miuki Miu 2018 MIT
        </Col>
        <Col xs={12} lg={6} className="generated">
          Generated with{' '}
          <a href="https://react-styleguidist.js.org/">React Styleguidist</a>
        </Col>
      </Row>
    </Grid>
  </Footer>
);
