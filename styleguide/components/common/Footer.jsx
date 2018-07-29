import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import remcalc from "remcalc";
import logo from "../assets/logo.svg";

const Section = styled.section`
  display: flex;
  padding: ${remcalc(20)} 0;
  background: #2b3847;
  color: #fff;
`;

const Footer = () => (
  <Section>
    <Grid>
      <Row>
        <Col xs={12} md={6}>
          <h2>Footer</h2>
        </Col>
      </Row>
    </Grid>
  </Section>
);

export default Footer;
