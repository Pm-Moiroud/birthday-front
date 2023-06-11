import axios, { InternalAxiosRequestConfig } from 'axios';
import { requestInterceptor } from './_interceptor';
import { removeLSitem } from './storageService';

const baseProvider = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  },
});

baseProvider.interceptors.request.use((config: InternalAxiosRequestConfig) =>
  requestInterceptor(config)
);

baseProvider.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      removeLSitem('accessToken');
    }
    return Promise.reject(error);
  }
);

export default baseProvider;
