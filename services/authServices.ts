import { User } from '../types/User';
import { AuthTokens } from '../types/User';
import baseProvider from './_baseProvider';

export async function signIn(
  data: Pick<User, 'email' | 'password'>
): Promise<AuthTokens> {
  try {
    const response = await baseProvider.post('/users/login', data);
    return response.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}

export async function registerUser(data: User): Promise<AuthTokens> {
  try {
    const response = await baseProvider.post('/users/register', data);
    return response.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}
