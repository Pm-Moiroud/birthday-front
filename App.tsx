import React from 'react';

import { NativeBaseProvider, Text, View } from 'native-base';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useGeneralStore } from './store';

import BottomBar from './components/shared/BottomBar';

import Birthday from './views/Birthday';
import Profile from './views/Profile';
import Setting from './views/Setting';
import Signin from './views/Signin';

import Register from './views/Register';
import { RootStackUnauthautentificated } from './types/Routes';

import Unauthorized from './views/Unauthorized';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackUnauthautentificated>();

import { DefaultTheme } from '@react-navigation/native';
import BackgroundLayout from './components/layouts/BackgroundLayout';
import CardLayout from './components/layouts/CardLayout';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export default function App() {
  const { handleUser, isAuthentificated } = useGeneralStore();

  React.useEffect(() => {
    handleUser();
  }, []);

  return (
    <NativeBaseProvider>
      {!isAuthentificated ? (
        <BackgroundLayout>
          <CardLayout>
            <NavigationContainer theme={navTheme}>
              <Stack.Navigator screenOptions={{}}>
                <Stack.Screen
                  name='Unauthorized'
                  component={Unauthorized}
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
                <Stack.Screen
                  name='Register'
                  component={Register}
                  options={{
                    headerShown: false,
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </CardLayout>
        </BackgroundLayout>
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
