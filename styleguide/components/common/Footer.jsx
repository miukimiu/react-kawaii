import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import remcalc from "remcalc";
import footerWave from "../assets/images/footer-wave.svg";

const Section = styled.section`
  display: flex;
  padding: ${remcalc(20)} 0;
  background: #2b3847;
  color: #fff;
  position: relative;
  height: 200px;

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

const Footer = () => (
  <Section>
    <Wave src={footerWave} />
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
