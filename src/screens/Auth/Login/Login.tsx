import {View, Text} from 'react-native';
import React from 'react';
import getStyles from './styles';

const Login = () => {
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Page</Text>
    </View>
  );
};

export default Login;
