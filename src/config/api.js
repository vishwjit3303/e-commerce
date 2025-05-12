import axios from 'axios';

// Use env variable for base URL (Vercel will inject this)
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Automatically attach JWT token if it exists
const token = localStorage.getItem('jwt');
if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
