import React from 'react';

import { NativeBaseProvider } from 'native-base';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Birthday from './views/Birthday';
import Setting from './views/Setting';
import Signin from './views/Signin';

import Register from './views/Register';
import {
  RootStackBirthdaysCRUD,
  RootStackUnauthautentificated,
} from './types/Routes';

import Unauthorized from './views/Unauthorized';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import BackgroundLayout from './components/layouts/BackgroundLayout';
import CardLayout from './components/layouts/CardLayout';
import useGeneralStore from './store';
import { View } from 'react-native';
import { Text } from 'react-native-svg';
import MainContainer from './components/layouts/MainContainer';
import { BlurView } from 'expo-blur';

const Stack = createNativeStackNavigator<RootStackUnauthautentificated>();
const Tab = createBottomTabNavigator<RootStackBirthdaysCRUD>();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export default function App() {
  const { isLogged, handleUser, userState } = useGeneralStore();

  React.useEffect(() => {
    handleUser();
  }, []);

  return userState === 0 ? (
    <View>
      <Text>loading</Text>
    </View>
  ) : (
    <SafeAreaProvider>
      <NativeBaseProvider>
        {!isLogged ? (
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
          <BackgroundLayout>
            <MainContainer>
              <NavigationContainer theme={navTheme}>
                <Tab.Navigator
                  screenOptions={{
                    tabBarStyle: {
                      backgroundColor: '#202A25',
                      opacity: 0.5,
                    },
                    tabBarBackground: () => (
                      <BlurView tint='dark' intensity={30} />
                    ),
                    tabBarLabelStyle: {
                      fontSize: 15,
                      fontWeight: '600',
                    },
                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: 'white',
                    tabBarIconStyle: { display: 'none' },
                  }}
                >
                  <Tab.Screen
                    name='Alert'
                    component={Birthday}
                    options={{ headerShown: false }}
                  />
                  <Tab.Screen
                    name='Setting'
                    component={Setting}
                    options={{ headerShown: false }}
                  />
                </Tab.Navigator>
              </NavigationContainer>
            </MainContainer>
          </BackgroundLayout>
        )}
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
