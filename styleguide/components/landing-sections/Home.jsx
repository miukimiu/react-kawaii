import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import remcalc from "remcalc";
import icon from "../assets/kawaii-icon.svg";
import cloud from "../assets/cloud.svg";
import shadow from "../assets/shadow.svg";

const Section = styled.section`
  display: flex;
  padding: ${remcalc(20)} 0;
  background: #cdecfe;
  min-height: ${remcalc(500)};
`;

const KawaiiIllustration = styled.section`
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Home = () => (
  <Section>
    <Grid>
      <Row>
        <Col xs={12} md={6}>
          <h2>Cute React SVG Components</h2>
          <p>
            React Kawaii is a library of cute SVG illustrations. Perfect if you
            want to give some cuteness to your react application.
          </p>
        </Col>
        <Col xs={12} md={6}>
          <KawaiiIllustration>
            <img src={shadow} />
            <img src={cloud} />
            <img src={cloud} />
            <img src={icon} />
          </KawaiiIllustration>
        </Col>
      </Row>
    </Grid>
  </Section>
);

export default Home;
