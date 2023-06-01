import { StateCreator } from 'zustand';
import { User } from '../types/User';
import { getCurrentUser } from '../services/userServices';

import AsyncStorage from '@react-native-async-storage/async-storage';

export interface UserStore {
  currentUser?: User;
  setCurrentUser: () => Promise<void>;
}
const userStore: StateCreator<UserStore, [], []> = (set) => ({
  setCurrentUser: async () => {
    set({ currentUser: undefined });
    try {
      const current = await getCurrentUser();
      set({ currentUser: current });
    } catch (error) {
      console.error(error);
    }
  },
});

export default userStore;
