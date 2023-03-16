import {View, Text} from 'react-native';
import React from 'react';
import getStyles from './styles';

const Home = () => {
  const styles = getStyles();

  return (
    <View style={styles.content}>
      <Text style={styles.text}>Home Page</Text>
    </View>
  );
};

export default Home;
