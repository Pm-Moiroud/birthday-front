import React from 'react';
import { StyleSheet, TextInput, TouchableHighlight, View } from 'react-native';
import { Formik } from 'formik';

import { Text } from 'react-native';
import InputsAuth from '../components/shared/InputsAuth';
import ButtonsUnauth from '../components/shared/ButtonsUnauth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackUnauthautentificated } from '../types/Routes';
import { mainStyle } from '../styles/main';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function Signin(
  props: NativeStackScreenProps<RootStackUnauthautentificated, 'Signin'>
) {
  return (
    <Formik
      initialValues={{ email: '', password: '', confirmPassword: '' }}
      onSubmit={(values) => console.log(values)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        setFieldError,
      }) => (
        <View style={mainStyle.pageContainer}>
          <Ionicons
            name='md-close'
            size={32}
            color='white'
            style={mainStyle.backIcon}
            onPress={() => props.navigation.navigate('Unauthorized')}
          />
          <Text style={[mainStyle.info, styles.infoContainer]}>SIGN IN</Text>
          <View style={mainStyle.formContainer}>
            <InputsAuth
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              label='Email*: '
              error={errors.email}
              setError={setFieldError}
              name='email'
            />
            <InputsAuth
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              name='password'
              label='Password*: '
              error={errors.password}
              setError={setFieldError}
            />
            <View>
              <Text style={{ color: 'white' }}>Forgot your password ?</Text>
            </View>
          </View>
          <TouchableHighlight
            onPress={() => handleSubmit}
            accessibilityLabel='register a new account'
            style={[mainStyle.Submitbutton]}
            underlayColor='transparent'
            delayPressIn={50}
          >
            <Text style={mainStyle.SubmitbuttonText}>Submit</Text>
          </TouchableHighlight>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    paddingVertical: 50,
    width: '100%',
    color: 'white',
  },
  formContainer: {
    width: '100%',
    display: 'flex',
    marginTop: 20,
  },
});
