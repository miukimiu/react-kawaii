import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { IceCream, Ghost, Planet } from '../../../src';
import Section from '../common/Section';
import ImageContainer from '../common/ImageContainer';
import Text from '../common/Text';
import PlanetAnimation from '../animations/PlanetAnimation';


const animationExample = () => {
  let openEyes = true;
  setInterval(() => openEyes = !openEyes, 1000)
  return openEyes ? "excited" : "happy";
};

const planetMood = animationExample();

const UseCases = () => (
  <Section color="#fff">
    <Grid>
      <Row center="xs">
        <Col md={8} className="text-center">
          <h1>For multiple scenarios</h1>
          <Text>
            No more boring apps! The React Kawaii library was created with one
            thing in mind, make your app fun and cute!
          </Text>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={6}>
          <ImageContainer start="500" end="800">
            <IceCream mood="shocked" />
          </ImageContainer>
        </Col>
        <Col md={12} lg={6}>
          <h2>Error States</h2>
          <Text>
            Sometimes things go wrong and when it happens nothing can be more
            boring and frustrating than an awful screen just displaying the
            error message!
          </Text>
          <Text>
            You can use a React Kawaii and set the mood to sad and the user will
            feel engaged!
          </Text>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={6} last="xs" first="lg">
          <h2>Empty States</h2>
          <Text>
            When you are building an app you have to think about those moments
            when there is no content. When the user lands in your app for the
            first time, and there is nothing there. Or when they achieve
            something, and it's a moment of success.
          </Text>
          <Text>
            Nothing can be more boring than just a screen with text! That's a
            great opportunity to put a React Kawaii with a happy mood!
          </Text>
        </Col>
        <Col md={12} lg={6}>
          <ImageContainer start="900" end="1400">
            <Ghost />
          </ImageContainer>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={6}>
          <ImageContainer start="1500" end="2000">
            <PlanetAnimation/>
          </ImageContainer>
        </Col>
        <Col md={12} lg={6}>
          <h2>Animations</h2>
          <Text>
            When you are building an app and you want to impress the user, you
            can use that awesome animation!
          </Text>
        </Col>
      </Row>
    </Grid>
  </Section>
);

export default UseCases;
