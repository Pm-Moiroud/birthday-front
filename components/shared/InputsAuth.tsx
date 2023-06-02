import { FormikProps } from 'formik';
import React from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputFocusEventData,
  View,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

type InputsAuthProps = {
  handleChange: any;
  handleBlur: any;
  values: any;
  label: string;
  error?: undefined | string;
  secureTextEntry?: boolean;
  setError: any;
  name: string;
};

export default function InputsAuth({
  handleChange,
  handleBlur,
  values,
  label,
  error,
  setError,
  secureTextEntry = false,
  name,
}: InputsAuthProps) {
  return (
    <View>
      <View
        style={
          error
            ? [styles.inputContainer, styles.inputError]
            : styles.inputContainer
        }
      >
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
        </View>
        <TextInput
          onChangeText={(e) => {
            handleChange(name)(e);
            setError(name, undefined);
          }}
          onBlur={handleBlur(name)}
          value={values[name]}
          style={styles.input}
          secureTextEntry={secureTextEntry}
        />
      </View>
      {error && (
        <View style={styles.error}>
          <Ionicons name='md-warning' size={18} color='red' />
          <Text style={{ color: 'red', fontSize: 10 }}>{error}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    height: 48,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 5,
  },
  input: {
    height: '100%',
    width: '70%',
    backgroundColor: '#DCDCDD',
    paddingHorizontal: 10,
    color: 'black',
  },
  labelContainer: {
    width: '30%',
    height: '100%',
    backgroundColor: '#DCDCDD',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    alignItems: 'center',
    overflow: 'hidden',
  },
  label: {
    textAlign: 'center',
    color: 'black',
    fontSize: 12,
  },
  error: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 2,
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
});
