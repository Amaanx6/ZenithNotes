import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'https://zenith-notes-kho4.vercel.app/',
});

// Add a request interceptor to include the JWT token in headers
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
});

// Add a response interceptor to handle errors globally
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Handle specific error statuses
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