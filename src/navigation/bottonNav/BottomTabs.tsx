import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../../screens/Home';
import {SecondPage} from '../../screens/SecondPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export enum AppScreens {
  Home = 'Home',
  SecondPage = 'SecondPage',
}
const BottomTab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name={AppScreens.Home}
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen name={AppScreens.SecondPage} component={SecondPage} />
    </BottomTab.Navigator>
  );
};
