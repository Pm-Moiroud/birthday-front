import React from 'react';
import { StyleSheet } from 'react-native';
import BirthdayModal from './BirthdayModal';
import { Formik } from 'formik';
import useGeneralStore from '../../store';
import { birthdaySchema } from '../../validations/birthdaySchema';

type Props = {};

export default function UpdateBirthday({}: Props) {
  const { toggleBirthdayModal, cleanBirthday, birthday } = useGeneralStore();
  return (
    <Formik
      initialValues={birthday}
      enableReinitialize={true}
      onSubmit={async (values) => {
        toggleBirthdayModal('update');
        cleanBirthday();
      }}
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

const styles = StyleSheet.create({});
