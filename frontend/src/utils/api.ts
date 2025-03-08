import axios from 'axios';

// Log environment variable for debugging
console.log('VITE_API_BASE_URL from env:', process.env.VITE_API_BASE_URL);

// Create axios instance with base URL from environment variable
const API = axios.create({
  baseURL: process.env.VITE_API_BASE_URL || 'https://zenith-notes-kho4.vercel.app', // Fallback for now
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token in headers
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
    } else if (error.request) {
      console.error('No response from server:', error.request);
    } else {
      console.error('Request error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default API;