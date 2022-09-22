import React from 'react';
import { View } from 'react-native';

const Wrapper = props => (
  <View {...props} style={{ position: 'relative', ...(props.style || {}) }} />
);

export default Wrapper;
