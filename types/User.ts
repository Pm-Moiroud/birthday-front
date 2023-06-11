import { TimeStamps } from './Global';

export interface User extends TimeStamps {
  id: string;
  pseudo: string;
  email: string;
  password?: string;
  canReceiveEmailNotif: boolean;
  canReceivePushNotif: boolean;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}
