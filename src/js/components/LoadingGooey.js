import React from 'react';
import '../../sass/components/_loading.scss';

const LoadingGooey = () => (
  <div className="loading--gooey">
    <div className="blobs">
      <div className="blob"></div>
      <div className="blob"></div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
  </div>
);

export default LoadingGooey;
