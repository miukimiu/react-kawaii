import React from 'react';

function Wrapper(props) {
  return React.createElement('div', {
    ...props,
    style: { position: 'relative', ...(props.style || {}) }
  });
}

export default Wrapper;
