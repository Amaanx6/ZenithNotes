import axios from 'axios';

// Create axios instance with base URL from environment variable
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Standardized env variable name, no /api suffix here
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