import React from 'react';
import { StyleSheet, View } from 'react-native';

type CardLayoutProps = {
  children: React.ReactNode;
};

export default function CardLayout({ children }: CardLayoutProps) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor: '#202A25',
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '#171717',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    borderRadius: 10,
    overflow: 'hidden',
    height: '80%',
    width: '80%',
  },
});
