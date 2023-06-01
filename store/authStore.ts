import { UserStore } from './userStore';
import { StateCreator } from 'zustand';

import { getCurrentUser } from '../services/userServices';
import { getLSitem } from '../services/storageService';

export interface AuthStore extends Pick<UserStore, 'currentUser'> {
  isAuthentificated: boolean;
  handleUser: () => Promise<void>;
}
const authStore: StateCreator<AuthStore, [], []> = (set, get) => ({
  handleUser: async () => {
    const token = await getLSitem('access_token');
    if (token) {
      try {
        const current = await getCurrentUser();
        set({ currentUser: current, isAuthentificated: true });
      } catch (error) {
        set({ isAuthentificated: false });
        console.error(error);
      }
    }
  },
  isAuthentificated: false,
});

export default authStore;
