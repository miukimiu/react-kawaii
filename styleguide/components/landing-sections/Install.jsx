import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import remcalc from "remcalc";
import Section from "../common/Section";

const Install = () => (
  <Section color="#fff">
    <Grid>
      <Row>
        <Col xs={12} md={6}>
          <h2>Install</h2>
        </Col>
      </Row>
    </Grid>
  </Section>
);

export default Install;
