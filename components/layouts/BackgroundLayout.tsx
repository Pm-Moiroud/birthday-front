import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import timeBg from '../../assets/time.jpg';

type BackgroundLayoutProps = {
  children: React.ReactNode;
};

export default function BackgroundLayout({ children }: BackgroundLayoutProps) {
  return (
    <ImageBackground source={timeBg} style={styles.full_width} blurRadius={0.5}>
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
    height: '90%',
    marginTop: 50,
    paddingVertical: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#202A25',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
  },
});
