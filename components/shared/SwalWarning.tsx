import { Overlay } from '@rneui/base';
import React from 'react';
import { Dimensions, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
type SwalWarningProps = {
  children: React.ReactNode;
};

export default function SwalWarning({ children }: SwalWarningProps) {
  const width = Dimensions.get('window').width;
  return (
    <Overlay
      transparent={true}
      isVisible={true}
      overlayStyle={{
        backgroundColor: 'transparent',
        width: width - 20,
        position: 'relative',
      }}
    >
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: 20,
          paddingBottom: 20,
          paddingTop: 40,
          borderRadius: 10,
        }}
      >
        <Ionicons
          name='md-add'
          size={25}
          color='red'
          style={{ position: 'absolute', right: 5, top: 5 }}
        />
        {children}
      </View>
    </Overlay>
  );
}
