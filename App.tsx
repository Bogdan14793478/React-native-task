import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {DarkTheme, DefaultTheme} from './src/styles/themes';
import {AppContainer} from './src/navigation/AppContainer';
import {DrawerNav} from './src/navigation/drawerNav/DrawerNav';

enum ColorScheme {
  Dark = 'dark',
  White = 'white',
}

function App(): JSX.Element {
  const scheme: ColorScheme = ColorScheme.White;

  return (
    <NavigationContainer
      theme={
        (scheme as ColorScheme) === ColorScheme.Dark ? DarkTheme : DefaultTheme
      }>
      <DrawerNav>
        <AppContainer />
      </DrawerNav>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
