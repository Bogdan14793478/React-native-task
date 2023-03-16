import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../../screens/Auth';

export enum AuthScreens {
  Login = 'Login',
}

export type AuthStackParamList = {
  [AuthScreens.Login]: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AuthScreens.Login}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={AuthScreens.Login} component={Login} />
    </Stack.Navigator>
  );
};
