/**
 *
 * Asynchronously loads the component for PersonView
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
