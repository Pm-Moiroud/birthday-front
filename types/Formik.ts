import dayjs from 'dayjs';
import { Birthday } from './Birthday';
import { User } from './User';

export const formikUserDefault = {
  id: '',
  pseudo: '',
  email: '',
  password: '',
  confirmPassword: '',
  canReceiveEmailNotif: false,
  canReceivePushNotif: false,
};

export interface FormikUser {
  id: string;
  pseudo: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  canReceiveEmailNotif: boolean;
  canReceivePushNotif: boolean;
}

export const formikBirthdayDefault: FormikBirthday = {
  name: '',
  started_at: dayjs().format(),
  ended_at: dayjs().format(),
  reminder_push: 0,
  reminder_email: 0,
  userId: '',
  statusId: '',
};

export interface FormikBirthday extends Omit<Birthday, 'id'> {}
