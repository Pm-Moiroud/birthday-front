import { TimeStamps } from './Global';

export interface User extends TimeStamps {
  id: string;
  pseudo: string;
  email: string;
  password?: string;
}

export interface AuthTokens {
  access_token: string;
  refresh_token: string;
}
