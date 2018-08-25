import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Plx from 'react-plx';
import styled from 'styled-components';
import remcalc from 'remcalc';
import Wave from '../common/Wave';
import Text from '../common/Text';
import icon from '../assets/images/kawaii-icon.svg';
import cloud from '../assets/images/cloud.svg';
import shadow from '../assets/images/shadow.svg';
import homeWave from '../assets/images/home-wave.svg';

const Section = styled.section`
  position: relative;
  display: flex;
  padding: ${remcalc(20)} 0;
  background: #cdecfe;
  min-height: ${remcalc(640)};
  padding: ${remcalc(40)};

  @media (max-width: 600px) {
    p {
      margin-bottom: ${remcalc(40)};
    }
  }

  @media (max-width: 1000px) {
    min-height: ${remcalc(900)};
  }
`;

const KawaiiIllustration = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  .shadow {
    position: absolute;
    top: 0px;
    z-index: 1;

    @media (max-width: 1000px) {
      img {
        width: 100%;
      }
    }
  }
  .icon {
    position: absolute;
    top: 50px;
    z-index: 3;
  }
  .cloud-a {
    position: absolute;
    top: 0px;
    left: 80px;
    z-index: 2;
  }
  .cloud-b {
    position: absolute;
    top: 120px;
    right: 20px;
    z-index: 2;
  }
`;

const CloudA = [
  {
    start: 20,
    end: 600,
    properties: [
      {
        startValue: 1,
        endValue: 1.1,
        property: 'scale'
      },
      {
        startValue: 0,
        endValue: -100,
        property: 'translateY'
      }
    ]
  }
];

const CloudB = [
  {
    start: 0,
    end: 600,
    properties: [
      {
        startValue: 1,
        endValue: 1.2,
        property: 'scale'
      },
      {
        startValue: 0,
        endValue: -200,
        property: 'translateY'
      }
    ]
  }
];

const IconAnim = [
  {
    start: 0,
    end: 600,
    properties: [
      {
        startValue: 0,
        endValue: 200,
        property: 'translateY'
      }
    ]
  }
];

const ShadowAnim = [
  {
    start: 0,
    end: 300,
    properties: [
      {
        startValue: 1,
        endValue: 1.1,
        property: 'scale'
      }
    ]
  }
];

const Home = () => (
  <Section>
    <Grid>
      <Row>
        <Col xs={12} lg={5}>
          <h1>Cute React SVG Components</h1>
          <Text>
            React Kawaii is a library of cute illustrations that are easily
            customisable. They are ideal to give some cuteness and personality
            to your ReactJS application. Just pick an illustration and set the
            mood and it's done!
          </Text>
        </Col>
        <Col xs={12} lg={7}>
          <KawaiiIllustration>
            <Plx className="shadow" parallaxData={ShadowAnim}>
              <img src={shadow} />
            </Plx>
            <Plx className="cloud-a" parallaxData={CloudA}>
              <img src={cloud} />
            </Plx>
            <Plx className="cloud-b" parallaxData={CloudB}>
              <img src={cloud} />
            </Plx>
            <Plx className="icon" parallaxData={IconAnim}>
              <img src={icon} />
            </Plx>
          </KawaiiIllustration>
        </Col>
      </Row>
    </Grid>
    <Wave src={homeWave} />
  </Section>
);

export default Home;
