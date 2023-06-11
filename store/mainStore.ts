import { StateCreator } from 'zustand';

import { GeneralStore } from '.';

import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { Alert } from 'react-native';

export interface MainStore {
  showToast: (type: string, title?: string, subtitle?: string) => void;
  isSwallVisible: boolean;
  setIsSwallVisible: (value: boolean) => void;
}

const mainStore: StateCreator<GeneralStore, [], [], MainStore> = (
  set,
  get
) => ({
  showToast: (type, title, subtitle) => {
    Toast.show({
      type: type,
      text1: title ?? 'Error',
      text2: subtitle ?? 'Something went wrong',
      visibilityTime: 3000,
    });
  },
  isSwallVisible: false,
  setIsSwallVisible: (value) => {
    set({ isSwallVisible: value });
  },
});

export default mainStore;
