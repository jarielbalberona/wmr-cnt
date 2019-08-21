/*
 *
 * Admin actions
 *
 */

import { DEFAULT_ACTION, TOOGLE_SIDEBAR } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function toggleSidebar() {
  return {
    type: TOOGLE_SIDEBAR,
  };
}
