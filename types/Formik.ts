export const formikUserDefault = {
  id: '',
  pseudo: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export interface FormikUser {
  id: string;
  pseudo: string;
  email: string;
  password?: string;
  confirmPassword?: string;
}
