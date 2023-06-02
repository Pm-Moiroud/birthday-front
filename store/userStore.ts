import { StateCreator } from 'zustand';
import { User } from '../types/User';
import { getCurrentUser, storeUser } from '../services/userServices';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { FormikUser } from '../types/Formik';
import { FormikHelpers, FormikProps } from 'formik';

export interface UserStore {
  currentUser?: User;
  createNewUser: (values: FormikUser) => Promise<void>;
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
  createNewUser: async (values: FormikUser) => {
    try {
      const newUser = storeUser(values);
      set({ currentUser: values });
    } catch (error) {
      console.error(error);
    }
  },
});

export default userStore;
