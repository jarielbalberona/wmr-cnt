import API from './API';

export default {
  add: (token, form) => {
    const api = new API(token);
    return api.post('/rebels', form);
  },
};
