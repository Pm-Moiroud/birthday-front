import { StateCreator } from 'zustand';
import { User } from '../types/User';

import { FormikUser } from '../types/Formik';
import {
  deleteUser,
  getCurrentUser,
  registerUser,
  signInUser,
  updateUser,
} from '../services/userServices';
import { GeneralStore } from '.';
import { getLSitem, removeLSitem, setLSitem } from '../services/storageService';
import State from '../types/Enum';

export interface UserStore {
  userState: State;
  currentUser?: User;
  getCurrentUser: () => Promise<void>;
  isLogged: boolean;
  handleUser: () => Promise<void>;
  handleUpdateUser: (values: FormikUser) => Promise<void>;
  createNewUser: (values: FormikUser) => Promise<FormikUser | undefined>;
  connectUser(values: FormikUser): Promise<FormikUser | undefined>;
  handleDeleteUser: () => Promise<void>;
  handleLogout: () => Promise<void>;
}
const userStore: StateCreator<GeneralStore, [], [], UserStore> = (
  set,
  get
) => ({
  isLogged: false,
  getCurrentUser: async () => {
    try {
      const res = await getCurrentUser();
      set({ currentUser: res.data, isLogged: true });
    } catch (error) {
      console.error(error);
    }
  },
  userState: State.Pending,
  handleUser: async () => {
    set({ userState: State.Pending });
    try {
      const accessToken = await getLSitem('accessToken');
      if (accessToken) {
        await get().getCurrentUser();
      }
    } catch (error) {
      console.error(error);
    } finally {
      set({ userState: State.Idle });
    }
  },
  createNewUser: async (values: FormikUser) => {
    try {
      const res = await registerUser(values);
      set({ currentUser: values });
      await setLSitem('accessToken', res.data.accessToken);
      get().showToast('success', 'Success', 'User created');
      set({ isLogged: true });
      return values;
    } catch (error: any) {
      console.error(error);
      get().showToast('error', 'Error', error.response.data.error);
    }
  },
  handleUpdateUser: async (values: FormikUser) => {
    try {
      const res = await updateUser(get().currentUser?.id ?? '', values);

      set({ currentUser: res.data });
      get().showToast('success', 'Success', 'User updated');
    } catch (error: any) {
      console.error(error);
      get().showToast('error', 'Error', error.response.data.error);
    }
  },
  connectUser: async (values: FormikUser) => {
    try {
      const res = await signInUser(values);
      set({ currentUser: values });
      await setLSitem('accessToken', res.data.accessToken);
      get().showToast('success', 'Success', 'User connected');
      set({ isLogged: true });
      return values;
    } catch (error: any) {
      console.error(error);
      get().showToast('error', 'Error', error.response.data.error);
    }
  },
  handleDeleteUser: async () => {
    try {
      await deleteUser();
      set({ currentUser: undefined });
      set({ isSwallVisible: false });
      await removeLSitem('accessToken');
      get().showToast('success', 'Success', 'User deleted');
      set({ isLogged: false });
    } catch (error: any) {
      console.error(error);
      get().showToast('error', 'Error', error.response.data.error);
    }
  },
  handleLogout: async () => {
    try {
      await removeLSitem('accessToken');
      set({ currentUser: undefined });
      set({ isSwallVisible: false });
      get().showToast('success', 'Success', 'User disconnected');
      set({ isLogged: false });
    } catch (error: any) {
      console.error(error);
      get().showToast('error', 'Error', error.response.data.error);
    }
  },
});

export default userStore;
