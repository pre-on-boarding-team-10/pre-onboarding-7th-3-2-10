import axios from 'axios';
import cookie from 'js-cookie';

const api = axios.create({
  baseURL: 'http://localhost:4000',
});

api.interceptors.request.use(
  (config) => {
    if (!config.headers) config.headers = {};
    config.headers['Authorization'] = `Bearer ${cookie.get('accessToken')}`;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

api.interceptors.response.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default api;
