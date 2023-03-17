import {Text, View} from 'react-native';
import React from 'react';

export const Card = ({title, description}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};
