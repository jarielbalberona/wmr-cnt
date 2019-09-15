/**
 *
 * LoadingInddicator
 *
 */

import React from 'react';
import Loader from 'react-loader-spinner';
import './styles';

function LoadingIndicator() {
  return (
    <div id="LoadingIndicator" className="loader">
      <Loader
        type="ThreeDots"
        color="#ff342e"
        height={100}
        width={100}
        timeout={10000} // 3 secs
      />
      <p>Loading list...</p>
    </div>
  );
}

export default LoadingIndicator;
