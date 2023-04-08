import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../../screens/Home';
import {SecondPage} from '../../screens/SecondPage';

export enum AppScreens {
  Home = 'Home',
  SecondPage = 'SecondPage',
}
const BottomTab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name={AppScreens.Home} component={Home} />
      <BottomTab.Screen name={AppScreens.SecondPage} component={SecondPage} />
    </BottomTab.Navigator>
  );
};
