import { AxiosResponse } from 'axios';
import { User, AuthTokens } from '../types/User';
import baseProvider from './_baseProvider';
import { FormikUser } from '../types/Formik';
import { RootSuccessResponse } from '../types/Global';

export async function registerUser(
  data: User
): Promise<AxiosResponse<AuthTokens>> {
  try {
    const response = await baseProvider.post('/auth/register', data);
    return response;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}

export async function getCurrentUser(): Promise<AxiosResponse<User>> {
  try {
    const response = await baseProvider.get('/users/current');
    return response;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}

export async function signInUser(
  data: Pick<User, 'email' | 'password'>
): Promise<AxiosResponse<AuthTokens>> {
  try {
    const response = await baseProvider.post('/auth/login', data);
    return response;
  } catch (error: any) {
    console.error(error.response?.data?.message);
    return Promise.reject(error);
  }
}

export async function updateUser(
  userId: string,
  user: FormikUser
): Promise<AxiosResponse<User>> {
  try {
    const response = await baseProvider.put(`/users/${userId}`, user);
    return response.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}

export async function refreshAccessToken(
  refreshableToken: string
): Promise<AxiosResponse<Pick<AuthTokens, 'refreshToken'>>> {
  try {
    const response = await baseProvider.post('/auth/refreshToken', {
      refreshToken: refreshableToken,
    });
    return response;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}

export async function deleteUser(): Promise<
  AxiosResponse<RootSuccessResponse>
> {
  try {
    const res = await baseProvider.delete(`/users/delete`);
    return res.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}
