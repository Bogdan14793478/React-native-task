import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {DarkTheme, DefaultTheme} from './src/styles/themes';
import {AppContainer} from './src/navigation/AppContainer';
import {Provider} from 'react-redux';
import configureStore from './configureStore';

enum ColorScheme {
  Dark = 'dark',
  White = 'white',
}

const store = configureStore();

function App(): JSX.Element {
  const scheme: ColorScheme = ColorScheme.White;

  return (
    <Provider store={store}>
      <NavigationContainer
        theme={
          (scheme as ColorScheme) === ColorScheme.Dark
            ? DarkTheme
            : DefaultTheme
        }>
        <AppContainer />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
