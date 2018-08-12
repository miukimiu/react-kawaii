import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import remcalc from "remcalc";
import logo from "../assets/images/logo.svg";

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

const TesterDemos = () => (
  <Grid>
    <Row>
      <Col xs={12} md={6} />
    </Row>
  </Grid>
);

export default TesterDemos;
