import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import remcalc from "remcalc";
import logo from "../assets/images/logo.svg";
import Section from "../common/Section";

const Contribute = () => (
  <Section color="#fff">
    <Grid>
      <Row center="xs">
        <Col xs={12} md={8}>
          <h2>Contribute</h2>
          <p>
            Be part of the awesome people who already contributed to this
            project.
          </p>
        </Col>
      </Row>
    </Grid>
  </Section>
);

export default Contribute;
