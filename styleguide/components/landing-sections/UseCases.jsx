import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import remcalc from "remcalc";
import logo from "../assets/logo.svg";

const Section = styled.section`
  display: flex;
  padding: ${remcalc(20)} ${remcalc(40)};
  background: #fff;
`;

const UseCases = () => (
  <Section>
    <Grid>
      <Row>
        <Col xs={12}>A text here</Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          Use Case A Text
        </Col>
        <Col xs={12} md={6}>
          Use Case A IMG
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          Use Case B IMG
        </Col>
        <Col xs={12} md={6}>
          Use Case B Text
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          Use Case C IMG
        </Col>
        <Col xs={12} md={6}>
          Use Case C Text
        </Col>
      </Row>
    </Grid>
  </Section>
);

export default UseCases;
