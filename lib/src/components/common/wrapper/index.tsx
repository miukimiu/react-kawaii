import React, { createElement } from 'react';

function Wrapper(props: any) {
  return createElement('div', {
    ...props,
    style: { position: 'relative', ...(props.style || {}) }
  });
}

export default Wrapper;
