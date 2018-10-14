import PropTypes from 'prop-types';
import React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import Avatar from '../Avatar';
import Section from '../common/Section';
import Text from '../common/Text';

const AvatarsRow = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  > div {
    margin-bottom: 1rem;
  }
`;

const Contribute = ({ contributors }) => (
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
        <AvatarsRow>
          {contributors.map(c => (
            <Col xs={6} md={2} lg={2} key={c.id}>
              <a href={c.githubUrl} target="_blank">
                <Avatar
                  imageUrl={c.imageUrl}
                  alt={`${c.name} - ${c.githubUsername}`}
                  title={`${c.name} - ${c.githubUsername}`}
                />
              </a>
            </Col>
          ))}
        </AvatarsRow>
      </Row>
    </Grid>
  </Section>
);

Contribute.defaultProps = {
  contributors: []
};

Contribute.propTypes = {
  contributors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      githubUrl: PropTypes.string,
      imageUrl: PropTypes.string
    })
  )
};

export default Contribute;
