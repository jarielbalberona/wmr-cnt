/**
 * Asynchronously loads the component for NotFoundPage
 */

import React from 'react';
import loadable from 'utils/loadable';

const LoadingIndicator = () => <div>Loading...</div>;

export default loadable(() => import('./index'), {
  fallback: <LoadingIndicator />,
});
