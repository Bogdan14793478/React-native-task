import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Loader} from '../components/Loader';
import {AppNavigator} from './navigators/AppNavigator';
import {AuthNavigator} from './navigators/AuthNavigator';

const DrawerTab = createDrawerNavigator();

export const AppContainer = () => {
  const loading = false;
  const session = true;
  console.log('AppContainer work');

  if (loading) {
    return <Loader />;
  }
  if (!session) {
    return <AuthNavigator />;
  }

  return (
    <DrawerTab.Navigator>
      <DrawerTab.Screen name={'AppNavigator'} component={<AppNavigator />} />

      {/* <AppNavigator /> */}
    </DrawerTab.Navigator>
  );
};
