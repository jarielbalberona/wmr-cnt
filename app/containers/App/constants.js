/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const APP_AUTH_ERROR = 'wmr-cnt/App/APP_AUTH_ERROR';
export const APP_NOTIFY = 'wmr-cnt/App/APP_NOTIFY';
export const LOAD_USER_SESSION = 'wmr-cnt/App/LOAD_USER_SESSION';
export const LOG_OUT = 'wmr-cnt/App/LOG_OUT';
