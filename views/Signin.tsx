import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { Formik } from 'formik';

import { Text } from 'react-native';
import BackgroundLayout from '../components/layouts/BackgroundLayout';

export default function Signin() {
  return (
    <Formik
      initialValues={{ email: '', password: '', confirmPassword: '' }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.form_container}>
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  form_container: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: '70%',
    marginLeft: 20,
    marginRight: 20,
  },
});
