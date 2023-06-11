import * as yup from 'yup';

export const birthdaySchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Pseudo must be 3 characters minimum')
    .max(255, 'Pseudo must be 255 characters maximum'),
  started_at: yup.date().required('Started date is required'),
  ended_at: yup
    .date()
    .min(yup.ref('started_at'), "End date can't be before Start date")
    .required('End date is required'),
});
