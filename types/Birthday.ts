import { Status, TimeStamps } from './Global';
import { User } from './User';

export interface Birthday extends TimeStamps {
  id: string;
  name: string;
  started_at: string;
  ended_at: string;
  reminder_push: number;
  reminder_email: number;

  userId: string;
  statusId: string;
  User?: User;
  Status?: Status;
}
