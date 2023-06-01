import { UserStore } from './userStore';
import { StateCreator } from 'zustand';

import { getCurrentUser } from '../services/userServices';
import { getLSitem } from '../services/storageService';

export interface AuthStore extends Pick<UserStore, 'currentUser'> {
  isAuthentificated: () => boolean;
  handleUser: () => Promise<void>;
}
const authStore: StateCreator<AuthStore, [], []> = (set, get) => ({
  isAuthentificated: () => {
    return true;
  },
  handleUser: async () => {
    const token = await getLSitem('access_token');
    if (token) {
      try {
        const current = await getCurrentUser();
        set({ currentUser: current });
      } catch (error) {
        console.error(error);
      }
    }
  },
});

export default authStore;
