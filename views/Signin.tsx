import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import { Formik, FormikValues } from 'formik';

import { Text } from 'react-native';
import InputsAuth from '../components/shared/InputsAuth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackUnauthautentificated } from '../types/Routes';
import { mainStyle } from '../styles/main';

import Ionicons from '@expo/vector-icons/Ionicons';
import useGeneralStore from '../store';
import { formikUserDefault } from '../types/Formik';

export default function Signin(
  props: NativeStackScreenProps<RootStackUnauthautentificated, 'Signin'>
) {
  const { connectUser } = useGeneralStore();

  return (
    <Formik
      initialValues={formikUserDefault}
      onSubmit={async (values) => {
        await connectUser(values);
      }}
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
            <Text style={[mainStyle.info, styles.infoContainer]}>SIGN IN</Text>
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
              name='password'
              label='Password*: '
              secureTextEntry={true}
              error={errors.password}
              setError={setFieldError}
            />
            <View>
              <Text style={{ color: 'white' }}>Forgot your password ?</Text>
            </View>
          </View>
          <TouchableHighlight
            // @ts-ignore
            onPress={handleSubmit}
            accessibilityLabel='Signin to your account'
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
    width: '100%',
    color: 'white',
  },
  formContainer: {
    width: '100%',
    display: 'flex',
    marginTop: 20,
  },
});
