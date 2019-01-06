import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import remcalc from 'remcalc';

const StyledSection = styled.section`
  position: relative;
  display: flex;
  min-height: ${props => remcalc(props.height)};
  background: ${props => props.color};
  padding: ${props => (props.padding ? props.padding : '20px 40px')};

  @media (max-width: 600px) {
    padding: ${props => (props.padding ? props.padding : '20px 20px')};
  }

  > div {
    position: relative;

    > div {
      padding-bottom: ${remcalc(100)};
    }
  }
`;

const Section = ({ children, height, color, padding }) => (
  <StyledSection height={height} color={color} padding={padding}>
    {children}
  </StyledSection>
);

Section.defaultProps = {
  height: 600
};

Section.propTypes = {
  height: PropTypes.number
};

export default Section;
