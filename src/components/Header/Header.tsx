import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {ArrowBack} from '../../assets/images/light';

import styles from './styles';

interface HeaderI {
  title: string;
}

export const Header: React.FC<HeaderI> = ({title}) => {
  //   const insets = useSafeAreaInsets();

  const navigation = useNavigation();

  console.log('Header work');
  const click = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerArrow} onPress={click}>
        <Image source={ArrowBack} />
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>

      <Text style={[styles.text, styles.title]}>{title}</Text>
    </View>
  );
};
