import { create } from 'zustand';
import userStore, { UserStore } from './userStore';

import authStore, { AuthStore } from './authStore';

export type GeneralStore = UserStore & AuthStore;

export const useGeneralStore = create<GeneralStore>()((...a) => ({
  ...userStore(...a),

  ...authStore(...a),
}));
