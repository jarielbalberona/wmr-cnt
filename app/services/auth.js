import API from './API';

export default {
  checkAuth: token => {
    const api = new API(token);
    return api.get('/users/me');
  },

  login: credentials => {
    const api = new API();
    return api.post('/users/login', credentials);
  },

  signup: form => {
    const api = new API();
    return api.post('/users/signup', form);
  },
};
