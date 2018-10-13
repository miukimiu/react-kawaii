import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  vertical-align: middle;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const Avatar = ({ imageUrl, ...props }) => {
  return <Image src={imageUrl} {...props} />;
};

Avatar.defaultProps = {
  imageUrl: 'https://via.placeholder.com/80x80'
};

Avatar.propTypes = {
  imageUrl: PropTypes.string
};

export default Avatar;
