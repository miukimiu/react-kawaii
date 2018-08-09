import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import remcalc from "remcalc";

const StyledSection = styled.section`
  position: relative;
  display: flex;
  min-height: ${props => props.height}px;
  background: ${props => props.color};
  padding: ${remcalc(20)} ${remcalc(40)};

  > div {
    position: relative;

    > div {
      padding-bottom: ${remcalc(100)};
    }
  }
`;

const Section = ({ children, height, color }) => (
  <StyledSection height={height} color={color}>
    {children}
  </StyledSection>
);

Section.defaultProps = {
  height: 600
};

Section.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Section;
