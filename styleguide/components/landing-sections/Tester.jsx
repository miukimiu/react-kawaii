import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import remcalc from 'remcalc';
import TesterDemos from './TesterDemos';
import Section from '../common/Section';
import BottomWave from '../common/Wave';
import Text from '../common/Text';
import ColorSelector from './ColorSelector';
import MoodSelector from './MoodSelector';
import SizeSelector from './SizeSelector';
import { Ghost } from '../../../src';
import topWaves from '../assets/images/top-waves.svg';
import homeWave from '../assets/images/home-wave.svg';

const Wave = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
`;

const Box = styled.div`
  background: #2b3847;
  border-radius: 4px;
  max-width: ${remcalc(800)};
  min-height: ${remcalc(400)};
  margin-top: ${remcalc(20)};
  width: 100%;
  color: #fff;
  display: inline-flex;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    width: 50%;
    padding: ${remcalc(20)};

    @media (max-width: 600px) {
      width: 100%;
    }
  }
  .properties {
    /* width: 50%; */
  }
  .preview {
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledGhost = styled(Ghost)`
  justify-self: center;
`;

class Tester extends Component {
  state = {
    activeMood: 'blissful',
    activeColor: '#FCCB7E',
    activeSize: 200
  };

  onUpdateColor = value => {
    this.setState({
      activeColor: value
    });
  };

  onUpdateMood = value => {
    this.setState({
      activeMood: value
    });
  };

  onUpdateSize = value => {
    this.setState({
      activeSize: value
    });
  };

  render() {
    const { activeMood, activeColor, activeSize } = this.state;

    return (
      <Section height={1000} color="#E7F6FF" padding="200px 20px 100px">
        <Wave src={topWaves} />
        <Grid>
          <Row center="xs">
            <Col xs={12} className="text-center">
              <h2>Try it out</h2>
              <Text>
                You can see how easy it is to use this library! Just set the
                props and you are done!
              </Text>
              <Box>
                <span className="properties">
                  <h4>Mood</h4>
                  <MoodSelector
                    onUpdateMood={this.onUpdateMood}
                    activeMood={activeMood}
                  />
                  <h4>Color</h4>
                  <ColorSelector
                    onUpdateColor={this.onUpdateColor}
                    activeColor={activeColor}
                  />
                  <h4>Size</h4>
                  <SizeSelector
                    onUpdateSize={this.onUpdateSize}
                    activeSize={activeSize}
                  />
                </span>
                <span className="preview">
                  <StyledGhost
                    color={activeColor}
                    mood={activeMood}
                    size={activeSize}
                  />
                </span>
              </Box>
            </Col>
            <Col xs={12}>
              <TesterDemos />
            </Col>
          </Row>
        </Grid>
        <BottomWave src={homeWave} />
      </Section>
    );
  }
}

export default Tester;
