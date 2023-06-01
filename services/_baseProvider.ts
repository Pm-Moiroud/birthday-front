import axios from 'axios';

const baseProvider = axios.create({
  baseURL: 'https://localhost:3001/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default baseProvider;
