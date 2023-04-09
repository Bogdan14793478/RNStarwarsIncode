import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export const Loader = () => {
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
};
