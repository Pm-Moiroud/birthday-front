import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackUnauthautentificated } from '../types/Routes';

import Lottie from 'lottie-react-native';
import ButtonsUnauth from '../components/shared/ButtonsUnauth';

export default function Unauthorized(
  props: NativeStackScreenProps<RootStackUnauthautentificated, 'Unauthorized'>
) {
  return (
    <View style={styles.pageContainer}>
      <Lottie
        source={require('../assets/lottie/unauth.json')}
        style={{ width: 300, height: 300 }}
        autoPlay
        loop
      />
      <Text style={styles.info}>Welcome to BirthdayReminder !</Text>
      <View style={styles.containerButtons}>
        <ButtonsUnauth
          onCancel={() => props.navigation.navigate('Register')}
          onValidate={() => props.navigation.navigate('Signin')}
          onCancelText='REGISTER'
          onValidateText='SIGN IN'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  info: {
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: 'white',
  },
  containerButtons: {
    width: '100%',
  },
});
