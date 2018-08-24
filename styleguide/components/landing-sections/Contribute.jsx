import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import remcalc from 'remcalc';
import logo from '../assets/images/logo.svg';
import Section from '../common/Section';
import Text from '../common/Text';

const Contribute = () => (
  <Section color="#fff" height={400}>
    <Grid>
      <Row center="xs">
        <Col xs={12}>
          <h2>Contribute</h2>
          <Text>
            Be part of the awesome people who already contributed to this
            project.
          </Text>
        </Col>
      </Row>
    </Grid>
  </Section>
);

export default Contribute;
