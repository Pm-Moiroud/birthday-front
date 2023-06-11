import { FormikBirthday, formikBirthdayDefault } from './../types/Formik';
import { StateCreator } from 'zustand';
import { GeneralStore } from '.';
import {
  createBirthday,
  deleteBirthday,
  searchBirthdays,
  updateBirthday,
} from '../services/birthdayServices';
import { Birthday } from '../types/Birthday';
import State from '../types/Enum';

type DefaultCrud = 'create' | 'update';

export type BirthdayStore = {
  birthdayListState: State;
  birthdays: Birthday[];
  birthdayPage: number;
  birthdaySearch: string;
  getBirthdays: () => Promise<void>;
  handleCreateBirthday: (
    birthday: FormikBirthday
  ) => Promise<Birthday | undefined>;
  birthday: FormikBirthday;
  handleUpdateBirthdayReminder: (
    birthdayId: string,
    birthday: Birthday
  ) => Promise<Birthday | undefined>;
  handleSetBirthday: (birthday: Birthday | FormikBirthday) => void;
  handleDeleteBirthday: (birthdayId: string) => Promise<void>;
  cleanBirthday: () => void;
  isBirthdayModalOpen: {
    open: boolean;
    type: DefaultCrud;
  };
  toggleBirthdayModal: (type: DefaultCrud) => void;
};

const birthdayStore: StateCreator<GeneralStore, [], [], BirthdayStore> = (
  set,
  get
) => ({
  birthdayListState: State.Pending,
  birthdays: [],
  birthdayPage: 1,
  birthdaySearch: '',

  getBirthdays: async () => {
    try {
      const res = await searchBirthdays('', 1);
      set({ birthdays: res.data });
    } catch (error) {
      console.error('errrrrrorrr', error);
    } finally {
      set({ birthdayListState: State.Idle });
    }
  },
  handleCreateBirthday: async (birthday: FormikBirthday) => {
    try {
      const res = await createBirthday(birthday);
      set({ birthdays: [...get().birthdays, res.data.data] });
      get().showToast('success', 'Success', 'Birthday created');
      return res.data.data;
    } catch (err: any) {
      get().showToast(
        'error',
        'Error',
        `${err?.response?.data?.message ?? 'Unable to create birthday'}`
      );
      console.error(err);
    }
  },
  handleUpdateBirthdayReminder: async (birthdayId, birthday) => {
    try {
      const res = await updateBirthday(birthdayId, birthday);
      const birthdays = get().birthdays.map((birthday) => {
        if (birthday.id === birthdayId) {
          return res.data.data;
        }
        return birthday;
      });
      set({ birthdays });
      get().showToast('success', 'Success', 'Birthday updated');
      return res.data.data;
    } catch (err: any) {
      get().showToast(
        'error',
        'Error',

        `${err?.response?.data?.message ?? 'Unable to update birthday'}`
      );
      console.error(err);
    }
  },
  birthday: formikBirthdayDefault,
  isBirthdayModalOpen: {
    open: false,
    type: 'create',
  },
  handleSetBirthday: (birthday) => {
    set({
      birthday: birthday,
    });
  },
  cleanBirthday: () => {
    set({
      birthday: formikBirthdayDefault,
      isBirthdayModalOpen: { ...get().isBirthdayModalOpen, open: false },
    });
  },
  toggleBirthdayModal: (type) => {
    set({
      isBirthdayModalOpen: {
        ...get().isBirthdayModalOpen,
        open: !get().isBirthdayModalOpen.open,
        type,
      },
    });
  },
  handleDeleteBirthday: async (birthdayId: string) => {
    try {
      await deleteBirthday(birthdayId);
      const birthdays = get().birthdays.filter(
        (birthday) => birthday.id !== birthdayId
      );
      set({ birthdays });
      get().showToast('success', 'Success', 'Birthday deleted');
    } catch (err: any) {
      get().showToast(
        'error',
        'Error',
        `${err?.response?.data?.message ?? 'Unable to delete birthday'}`
      );
      console.error(err);
    }
  },
});

export default birthdayStore;
