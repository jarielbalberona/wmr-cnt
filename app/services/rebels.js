import API from './API';

export default {
  list: token => {
    const api = new API(token);
    return api.get('/rebels');
  },
  getById: (id, token) => {
    const api = new API(token);
    return api.get(`/rebels/${id}`);
  },

  add: (token, form) => {
    const api = new API(token);
    return api.post('/rebels', form);
  },

  update: (id, form, token) => {
    const api = new API(token);
    return api.put(`/rebels/${id}`, form);
  },
};
