import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Text, View } from 'native-base';
import { ImageBackground } from 'react-native';

import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Birthday from './views/Birthday';
import Profile from './views/Profile';
import Setting from './views/Setting';
import BottomBar from './components/BottomBar';
import { useGeneralStore } from './store';
import Signin from './views/Signin';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './views/Register';
import BackgroundLayout from './components/layouts/BackgroundLayout';
import Unautentificated from './views/Unautentificated';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  const { handleUser, isAuthentificated } = useGeneralStore();
  React.useEffect(() => {
    handleUser();
  }, []);

  return (
    <NativeBaseProvider>
      {!isAuthentificated ? (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{}}>
            <Stack.Screen
              name='Unautentificated'
              component={Unautentificated}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Signin'
              component={Signin}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name='Register' component={Register} />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Tab.Navigator tabBar={BottomBar}>
            <Tab.Screen name='Home' component={Birthday} />
            <Tab.Screen name='Profile' component={Profile} />
            <Tab.Screen name='Settings' component={Setting} />
          </Tab.Navigator>
        </NavigationContainer>
      )}
    </NativeBaseProvider>
  );
}
