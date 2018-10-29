import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import remcalc from 'remcalc';
import logo from '../assets/images/logo.svg';

const Ul = styled.ul`
  list-style: none;
  text-align: center;
  padding-left: 0;
  position: relative;
  z-index:2;
`;

const TesterDemos = () => (
  <Grid>
    <Row>
      <Col xs={12}>
        <h2>Demos</h2>
        <Ul>
          <li>
            <a href="https://codesandbox.io/s/23rk7j098j">
              Searching with a Kawaii Animation
            </a>
          </li>
          <li>
            <a href="https://codesandbox.io/s/z397wo86p3">
              Animating a Kawaii with Popmotion
            </a>
          </li>
        </Ul>
      </Col>
    </Row>
  </Grid>
);

export default TesterDemos;
