import { User } from '../types/User';
import baseProvider from './_baseProvider';

export async function getCurrentUser(): Promise<User> {
  try {
    const response = await baseProvider.get('/users/current');
    return response.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}