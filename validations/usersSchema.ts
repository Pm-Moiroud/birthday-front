import * as yup from 'yup';

export const usersSchema = yup.object().shape({
  pseudo: yup
    .string()
    .min(3, 'Pseudo must be 3 characters')
    .max(20, 'Pseudo must be 20 characters'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password'), ''], 'Passwords must match'),
});
