import baseProvider from './_baseProvider';

import { AxiosResponse } from 'axios';
import { Birthday } from '../types/Birthday';
import { FormikBirthday } from '../types/Formik';

export async function createBirthday(
  birthday: FormikBirthday
): Promise<AxiosResponse<{ data: Birthday }>> {
  try {
    const res = await baseProvider.post('/birthdays/store', birthday);
    return res;
  } catch (err: any) {
    console.error(err.response.data);
    return Promise.reject(err);
  }
}

export async function searchBirthdays(
  search: string,
  page: number
): Promise<AxiosResponse<Birthday[]>> {
  try {
    const res = await baseProvider.post(`/birthdays/search?page=${page}`, {
      search,
    });
    return res.data;
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
}

export async function updateBirthday(
  birthdayId: string,
  birthday: FormikBirthday
): Promise<AxiosResponse<{ data: Birthday }>> {
  try {
    const res = await baseProvider.put(`/birthdays/${birthdayId}`, birthday);
    return res;
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
}

export async function deleteBirthday(birthdayId: string): Promise<void> {
  try {
    await baseProvider.delete(`/birthdays/${birthdayId}/delete`);
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
}
