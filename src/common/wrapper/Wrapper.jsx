import React from "react";
import PropTypes from "prop-types";
import stylePropType from "react-style-proptype";
import styled from "styled-components";

const KawaiiWrapper = styled.div`
  position: relative;
`;

const Wrapper = ({ style, color, children }) => (
  <KawaiiWrapper color={color}>{children}</KawaiiWrapper>
);

Wrapper.propTypes = {
  style: stylePropType.isRequired,
  children: PropTypes.element.isRequired,
  /**
   * Hex color
   */
  color: PropTypes.string
};

Wrapper.defaultProps = {
  size: 120,
  mood: "blissful",
  color: "#FDA7DC"
};

export default Wrapper;
