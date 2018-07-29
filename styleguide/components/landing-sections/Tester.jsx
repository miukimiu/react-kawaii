import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import remcalc from "remcalc";
import TesterDemos from "./TesterDemos";

const Logo = styled.div`
  margin-right: ${remcalc(20)};
`;

const Header = styled.div`
  display: flex;
  padding: ${remcalc(20)} 0;
`;

const Nav = styled.nav`
  flex: 1;
  justify-content: flex-end;
  display: flex;
`;

const Tester = () => (
  <Grid>
    <Row>
      <Col xs={12} md={6}>
        <h2>Try it out</h2>
      </Col>
      <Col xs={12} md={6}>
        <TesterDemos />
      </Col>
    </Row>
  </Grid>
);

export default Tester;
