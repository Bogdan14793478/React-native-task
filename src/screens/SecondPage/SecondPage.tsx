import {View, Text} from 'react-native';
import React from 'react';
import getStyles from './styles';

const SecondPage = () => {
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>SecondPage</Text>
    </View>
  );
};

export default SecondPage;
