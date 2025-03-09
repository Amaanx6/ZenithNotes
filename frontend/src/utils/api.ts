// src/utils/api.ts
import axios from 'axios';

console.log('VITE_API_BASE_URL:', process.env.VITE_API_BASE_URL);

const API = axios.create({
  baseURL: process.env.VITE_API_BASE_URL || 'https://zenith-notes-kho4.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    } else if (error.request) {
      console.error('No response from server:', error.request);
    } else {
      console.error('Request error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default API;