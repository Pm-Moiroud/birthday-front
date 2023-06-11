import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import timeBg from '../../assets/time.jpg';

import { Toast } from 'react-native-toast-message/lib/src/Toast';
import toastConfig from '../../config/toast.config';

type BackgroundLayoutProps = {
  children: React.ReactNode;
};

export default function BackgroundLayout({ children }: BackgroundLayoutProps) {
  return (
    <ImageBackground source={timeBg} style={styles.full_width} blurRadius={0.5}>
      <Toast config={toastConfig} position='bottom' />
      <View style={styles.container}>{children}</View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  full_width: {
    width: '100%',
    height: '100%',
  },
  container: {
    marginTop: 50,
    height: '100%',
  },
});
