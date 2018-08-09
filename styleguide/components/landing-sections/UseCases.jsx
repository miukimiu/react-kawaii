import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import remcalc from "remcalc";
import { IceCream, Ghost, Planet } from "../../../src";
import Section from "../common/Section";
import ImageContainer from "../common/ImageContainer";

const UseCases = () => (
  <Section color="#fff">
    <Grid>
      <Row>
        <Col xs={12}>
          <h1>For multiple scenarios</h1>
          <p>
            No more boring apps! The React Kawaii library was created with one
            thing in mind. Make your app fun and cute!
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <ImageContainer start="500" end="800">
            <IceCream mood="shocked" />
          </ImageContainer>
        </Col>
        <Col xs={12} md={6}>
          <h2>Error States</h2>
          <p>Lorem ipsum</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <h2>Empty States</h2>
          <p>Lorem ipsum</p>
        </Col>
        <Col xs={12} md={6}>
          <ImageContainer start="900" end="1400">
            <Ghost />
          </ImageContainer>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <ImageContainer start="1500" end="2000">
            <Planet />
          </ImageContainer>
        </Col>
        <Col xs={12} md={6}>
          <h2>Animations</h2>
          <p>Lorem ipsum</p>
        </Col>
      </Row>
    </Grid>
  </Section>
);

export default UseCases;
