import API from './API';

export default {
  login: credentials => {
    const api = new API();
    return api.post('/users/login', credentials);
  },

  signup: form => {
    const api = new API();
    return api.post('/users/signup', form);
  },
};
