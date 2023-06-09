import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Loader} from '../components/Loader';
import {AppNavigator} from './navigators/AppNavigator';
import {AuthNavigator} from './navigators/AuthNavigator';
import Button from '../components/Button/Button';
import {ViewContainer} from './styles';

const DrawerTab = createDrawerNavigator();

export const AppContainer = () => {
  const loading = false;
  const session = true;

  if (loading) {
    return <Loader />;
  }
  if (!session) {
    return <AuthNavigator />;
  }

  return (
    <DrawerTab.Navigator drawerContent={props => <DrawerView {...props} />}>
      <DrawerTab.Screen name={'AppNavigator'} component={AppNavigator} />
    </DrawerTab.Navigator>
  );
};

function DrawerView(props: any) {
  return (
    <ViewContainer>
      <Button
        type="secondary"
        onPress={() => {
          props.navigation.navigate('Home');
        }}
        background={false}>
        Home
      </Button>
      <Button
        type="secondary"
        onPress={() => {
          props.navigation.navigate('SecondPage');
        }}
        background={false}>
        Second Page
      </Button>
    </ViewContainer>
  );
}
