import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import remcalc from "remcalc";
import TesterDemos from "./TesterDemos";
import Section from "../common/Section";
import BottomWave from "../common/Wave";
import topWaves from "../assets/images/top-waves.svg";
import homeWave from "../assets/images/home-wave.svg";

const Wave = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

// const Wave = styled(Grid)`
//   position: relative;
// `;

const Tester = () => (
  <Section height={600} color="#E7F6FF">
    <Wave src={topWaves} />
    <Grid>
      <Row>
        <Col xs={12}>
          <h2>Try it out</h2>
        </Col>
        <Col xs={12}>
          <TesterDemos />
        </Col>
      </Row>
    </Grid>
    <BottomWave src={homeWave} />
  </Section>
);

export default Tester;
