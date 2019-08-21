/*
 *
 * Admin reducer
 *
 */

import produce from 'immer';
import { DEFAULT_ACTION, TOOGLE_SIDEBAR } from './constants';

export const initialState = {
  side_expanded: false,
};

/* eslint-disable default-case, no-param-reassign */
const adminReducer = produce((draft, action) => {
  switch (action.type) {
    case DEFAULT_ACTION:
      break;
    case TOOGLE_SIDEBAR:
      draft.side_expanded = !draft.side_expanded;
      break;
  }
}, initialState);

export default adminReducer;
