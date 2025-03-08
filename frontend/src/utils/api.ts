import axios from 'axios';

// Create axios instance with base URL from environment variable
const API = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}/api`, // No fallback to localhost
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
    // Handle specific error statuses
    if (error.response) {
      if (error.response.status === 401) {
        // Token expired or unauthorized
        localStorage.removeItem('token'); // Clear the invalid token
        window.location.href = '/login'; // Redirect to login page
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response from server:', error.request);
    } else {
      // Something happened in setting up the request
      console.error('Request error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default API;