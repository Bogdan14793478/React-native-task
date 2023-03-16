import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabs} from '../bottonNav/BottomTabs';

export enum AppScreens {
  UnitPage = 'UnitPage',
}

export type AppStackParamList = {
  [AppScreens.UnitPage]: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AppScreens.UnitPage}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={AppScreens.UnitPage} component={BottomTabs} />
      {/* <Stack.Screen name={AppScreens.SecondPage} component={SecondPage} /> */}
    </Stack.Navigator>
  );
};
