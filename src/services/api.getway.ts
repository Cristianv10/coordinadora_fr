import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 25000,
});
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
  
  api.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    if (error.response?.status === 401) {
      console.log('Response error: ', error);
    }
    return Promise.reject(error);
  });
