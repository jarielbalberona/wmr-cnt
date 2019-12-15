/**
 *
 * Asynchronously loads the component for PersonList
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
