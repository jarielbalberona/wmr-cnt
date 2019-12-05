/*
 * SignupConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_INPUT = 'wmr-cnt/Home/CHANGE_INPUT';

export const CHECK_AUTH = 'wmr-cnt/Home/CHECK_AUTH';
export const CHECK_AUTH_ERROR = 'wmr-cnt/Home/CHECK_AUTH_ERROR';
export const CHECK_END = 'wmr-cnt/Home/CHECK_END';

export const LOGIN = 'wmr-cnt/Home/LOGIN';
export const LOGIN_ERROR = 'wmr-cnt/Home/LOGIN_ERROR';
export const LOGIN_SUCCESS = 'wmr-cnt/Home/LOGIN_SUCCESS';
