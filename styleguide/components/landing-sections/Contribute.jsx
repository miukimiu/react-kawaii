import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import remcalc from "remcalc";
import logo from "../assets/logo.svg";
import Section from "./partials/Section";

const Contribute = () => (
  <Section color="#E7F6FF">
    <Grid>
      <Row>
        <Col xs={12} md={6}>
          <h2>Contribute</h2>
        </Col>
      </Row>
    </Grid>
  </Section>
);

export default Contribute;
