import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Text, View } from 'native-base';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Birthday from './views/Birthday';
import Profile from './views/Profile';
import Setting from './views/Setting';
import BottomBar from './components/BottomBar';
import { useGeneralStore } from './store';

const Tab = createBottomTabNavigator();

export default function App() {
  const { handleUser } = useGeneralStore();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator tabBar={BottomBar}>
          <Tab.Screen name='Home' component={Birthday} />
          <Tab.Screen name='Profile' component={Profile} />
          <Tab.Screen name='Settings' component={Setting} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
