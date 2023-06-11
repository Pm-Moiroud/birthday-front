import { Dimensions, StyleSheet } from 'react-native';

import React from 'react';
import { Overlay } from '@rneui/base';
import { FormikProps } from 'formik';
import { FormikBirthday } from '../../types/Formik';
import BirthdayForm from './BirthdayForm';
import useGeneralStore from '../../store';

type BirthdayModalProps = {
  formik: FormikProps<FormikBirthday>;
};

export default function BirthdayModal({ formik }: BirthdayModalProps) {
  const width = Dimensions.get('window').width;
  const { isBirthdayModalOpen } = useGeneralStore();
  return isBirthdayModalOpen.open ? (
    <Overlay
      transparent={true}
      isVisible={isBirthdayModalOpen.open}
      overlayStyle={{
        backgroundColor: 'transparent',
        width: width - 20,
        position: 'relative',
      }}
    >
      <BirthdayForm formik={formik} />
    </Overlay>
  ) : null;
}

const styles = StyleSheet.create({});
