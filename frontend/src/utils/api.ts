// src/utils/api.ts
import axios from 'axios';

// Create axios instance with base URL from environment variable
const API = axios.create({
  // Make sure this includes /api if your backend routes are prefixed with /api
  baseURL: process.env.REACT_APP_API_BASE_URL,
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
    // Add global error handling here if needed
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default API;