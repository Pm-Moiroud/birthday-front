import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BackgroundLayout from '../components/layouts/BackgroundLayout';

export default function Unautentificated() {
  return (
    <BackgroundLayout>
      <View style={styles.container}>
        <Text>sdf</Text>
      </View>
    </BackgroundLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '80%',
  },
});
