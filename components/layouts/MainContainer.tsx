import React from 'react';

import { Dimensions } from 'react-native';
import { View } from 'react-native';

type MainContainerProps = {
  children: React.ReactNode;
};

export default function MainContainer({ children }: MainContainerProps) {
  const screenHeight = Dimensions.get('window').height;
  return (
    <View
      style={{
        height: screenHeight - 50,
        width: '100%',
      }}
    >
      {children}
    </View>
  );
}
