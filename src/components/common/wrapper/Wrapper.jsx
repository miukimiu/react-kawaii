import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import styled from 'styled-components';

const KawaiiWrapper = styled.div`
  position: relative;
`;

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { color, children, className } = this.props;

    return (
      <KawaiiWrapper color={color} className={className}>
        {children}
      </KawaiiWrapper>
    );
  }
}

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
  mood: 'blissful',
  color: '#FDA7DC'
};

export default Wrapper;
