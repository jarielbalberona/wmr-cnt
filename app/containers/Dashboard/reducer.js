/*
 *
 * Dashboard reducer
 *
 */

import produce from 'immer';
import { DEFAULT_ACTION, TOOGLE_SIDEBAR } from './constants';

export const initialState = {
  sidebar_open: false,
};

/* eslint-disable default-case, no-param-reassign */
const dashboardReducer = produce((draft, action) => {
  switch (action.type) {
    case DEFAULT_ACTION:
      break;
    case TOOGLE_SIDEBAR:
      draft.sidebar_open = !draft.sidebar_open;
      break;
  }
}, initialState);

export default dashboardReducer;
