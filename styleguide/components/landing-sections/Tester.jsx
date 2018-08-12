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

const Box = styled.div`
  background: #2b3847;
  border-radius: 4px;
  max-width: ${remcalc(800)};
  min-height: ${remcalc(400)};
  width: 100%;
  color: #fff;
  display: inline-flex;
`;

const Tester = () => (
  <Section height={1000} color="#E7F6FF">
    <Wave src={topWaves} />
    <Grid>
      <Row center="xs">
        <Col xs={12} className="text-center">
          <h2>Try it out</h2>
          <p>
            You can see how easy it is to use this library! Just set the props
            and you are done!
          </p>
          <Box>Here</Box>
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
