import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeScreen } from '../screens/home';
import { SCREEN_NAMES } from './navigation-constants';
import { TestScreen } from '../screens/test-screen';


const Stack = createNativeStackNavigator();

export const HomeRoute = (props) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name={SCREEN_NAMES.HOME} component={HomeScreen} />
      <Stack.Screen name={SCREEN_NAMES.TEST} component={TestScreen} />
    </Stack.Navigator>
  );
}