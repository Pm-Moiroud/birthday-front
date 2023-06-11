import React from 'react';
import BirthdayModal from './BirthdayModal';
import { Formik } from 'formik';
import useGeneralStore from '../../store';
import { birthdaySchema } from '../../validations/birthdaySchema';
import { formikBirthdayDefault } from '../../types/Formik';

export default function CreateBirthday() {
  const { toggleBirthdayModal, handleCreateBirthday } = useGeneralStore();

  return (
    <Formik
      initialValues={formikBirthdayDefault}
      onSubmit={async (values) => {
        await handleCreateBirthday(values);
        toggleBirthdayModal('create');
      }}
      enableReinitialize={true}
      validationSchema={birthdaySchema}
      validateOnChange={true}
      validate={(values) => {
        if (!values.name) {
          return { name: 'Name is required' };
        }
      }}
    >
      {(formik) => <BirthdayModal formik={formik} />}
    </Formik>
  );
}
