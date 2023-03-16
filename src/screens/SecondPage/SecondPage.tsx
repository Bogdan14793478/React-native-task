import {View, Text} from 'react-native';
import React from 'react';
import getStyles from './styles';
// import styles from './styles';
// import {Link} from '@react-navigation/native';
// import {ImageDark, ImageLight} from '../../../assets/images';

const SecondPage = () => {
  const styles = getStyles();

  // let image = dark ? ImageDark.BackgroundImg : ImageLight.BackgroundImg;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>SecondPage</Text>
      {/* <Link to={{screen: 'ResetPassword'}}>Reset Password</Link> */}
    </View>
  );
};

export default SecondPage;
