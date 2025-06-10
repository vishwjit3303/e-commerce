import axios from 'axios';
const DEPLOYED='https://e-commerce-server-production-0873.up.railway.app'
const LOCALHOST='http://localhost:5454'

export const API_BASE_URL = LOCALHOST

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Use request interceptor to conditionally set Authorization header
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwt');
    // Do not set Authorization header for login or signup requests
    if (token && !config.url.includes('/auth/signin') && !config.url.includes('/auth/signup')) {
      config.headers['Authorization'] = `Bearer ${token}`;
    } else {
      delete config.headers['Authorization'];
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
