import axios, { InternalAxiosRequestConfig } from 'axios';
import { checkJwtStatus } from '../utils/functions/globals';
import { getLSitem, removeLSitem } from './storageService';

// Request interceptor
export async function requestInterceptor(config: InternalAxiosRequestConfig) {
  const accessToken = await getLSitem('accessToken');
  if (accessToken) {
    const status = checkJwtStatus(accessToken);
    switch (status) {
      case 'expired':
        return Promise.reject('expired');
      case 'refreshable':
        try {
          const res = await axios.post(
            'http://localhost:3000/auth/refreshToken',
            {
              refreshToken: accessToken,
            }
          );
          config.headers.Authorization = res.data.refreshToken;
          return config;
        } catch (err) {
          await removeLSitem('accessToken');
          return Promise.reject(err);
        }
      case 'valid':
        config.headers.Authorization = accessToken;
        return config;
      default:
        return config;
    }
  }

  return config;
}
