import { View } from 'native-base';
import React from 'react';
import { Text } from 'react-native';

type HomeScreenProps = {
  navigation: any;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 100,
        padding: 20,
      }}
    >
      <Text onPress={() => navigation.navigate('Profile', { name: 'Jane' })}>
        dqsd
      </Text>
    </View>
  );
}
