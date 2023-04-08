import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/Home/Home';
import Card from '../../screens/Card/Card';

export enum AuthScreens {
  Home = 'Home',
  Card = 'Card',
}

export type AuthStackParamList = {
  [AuthScreens.Home]: undefined;
  [AuthScreens.Card]: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AuthScreens.Home}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={AuthScreens.Home} component={Home} />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={AuthScreens.Card}
        component={Card}
      />
    </Stack.Navigator>
  );
};
