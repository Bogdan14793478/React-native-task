import React from 'react';
import {Loader} from '../components/Loader';
import {AppNavigator} from './navigators/AppNavigator';
import {AuthNavigator} from './navigators/AuthNavigator';

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

  return <AppNavigator />;
};
