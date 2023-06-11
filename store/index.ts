import { create } from 'zustand';
import userStore, { UserStore } from './userStore';

import { subscribeWithSelector } from 'zustand/middleware';

import mainStore, { MainStore } from './mainStore';
import birthdayStore, { BirthdayStore } from './birthdayStore';

export type GeneralStore = UserStore & MainStore & BirthdayStore;

const useGeneralStore = create<GeneralStore>()(
  subscribeWithSelector((...a) => ({
    ...userStore(...a),
    ...mainStore(...a),
    ...birthdayStore(...a),
  }))
);

export default useGeneralStore;
