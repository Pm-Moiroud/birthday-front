import React from 'react';

import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { RootStackUnauthautentificated } from '../types/Routes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import { mainStyle } from '../styles/main';
import { formikUserDefault } from '../types/Formik';
import useGeneralStore from '../store';
import InputsAuth from '../components/shared/InputsAuth';
import { usersSchema } from '../validations/usersSchema';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function Register(
  props: NativeStackScreenProps<RootStackUnauthautentificated, 'Register'>
) {
  const { createNewUser } = useGeneralStore();

  return (
    <Formik
      initialValues={formikUserDefault}
      onSubmit={async (values) => {
        const res = await createNewUser(values);
        if (res) {
          props.navigation.navigate('Signin');
        }
      }}
      validationSchema={usersSchema}
      validateOnChange={false}
      validateOnBlur={false}
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
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Ionicons
              name='md-close'
              size={32}
              color='white'
              style={mainStyle.backIcon}
              onPress={() => props.navigation.navigate('Unauthorized')}
            />
            <Text style={[mainStyle.info, styles.infoContainer]}>REGISTER</Text>
          </View>
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
              name='pseudo'
              label='Pseudo: '
              error={errors.pseudo}
              setError={setFieldError}
            />
            <InputsAuth
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              secureTextEntry={true}
              label='Password*: '
              name='password'
              error={errors.password}
              setError={setFieldError}
            />
            <InputsAuth
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              label='Password2*: '
              name='confirmPassword'
              secureTextEntry={true}
              error={errors.confirmPassword}
              setError={setFieldError}
            />
          </View>
          <TouchableHighlight
            accessibilityLabel='register a new account'
            style={[mainStyle.Submitbutton]}
            underlayColor='transparent'
            delayPressIn={50}
            // @ts-ignore-next-line
            onPress={handleSubmit}
          >
            <Text style={styles.SubmitbuttonText}>Submit</Text>
          </TouchableHighlight>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    width: '100%',
    color: 'white',
  },
  Submitbutton: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    backgroundColor: '#46494C',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.27,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  SubmitbuttonText: {
    color: 'white',
    fontSize: 20,
  },
});
