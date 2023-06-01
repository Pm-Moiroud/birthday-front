import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import mainBackground from '../../assets/mainbg.jpg';

type BackgroundLayoutProps = {
  children: React.ReactNode;
};

export default function BackgroundLayout({ children }: BackgroundLayoutProps) {
  return (
    <ImageBackground
      source={mainBackground}
      style={styles.full_width}
      blurRadius={0.5}
    >
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
    marginTop: 100,
    height: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
