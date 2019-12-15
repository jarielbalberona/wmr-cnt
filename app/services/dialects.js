import API from './API';

const baseUrl = '/dialects';
export default {
  list: token => {
    const api = new API(token);
    return api.get(`${baseUrl}/`);
  },
  add: (token, form) => {
    const api = new API(token);
    return api.post(`${baseUrl}/`, form);
  },
  delete: (token, id) => {
    const api = new API(token);
    return api.delete(`${baseUrl}/${id}`);
  },
};
