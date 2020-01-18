import API from './API';

const baseUrl = '/rebel-groups';
export default {
  list: token => {
    const api = new API(token);
    return api.get(`${baseUrl}/`);
  },
  add: (token, form) => {
    const api = new API(token);
    return api.post(`${baseUrl}/add`, form);
  },
  get: (token, id) => {
    const api = new API(token);
    return api.get(`${baseUrl}/${id}`);
  },
  update: (token, id, form) => {
    console.log(form);
    const api = new API(token);
    return api.put(`${baseUrl}/${id}`, form);
  },
  delete: (token, id) => {
    const api = new API(token);
    return api.delete(`${baseUrl}/${id}`);
  },
};
