import React from 'react';
import {Text, View} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Header} from '../../components/Header/Header';

import {CharactersI} from '../../redux/actions/interface';

import styles from './styles';

type RootStackParamList = {
  Card: {item: CharactersI};
};

type CardRouteProp = RouteProp<RootStackParamList, 'Card'>;

const Card = () => {
  const insets = useSafeAreaInsets();

  const route = useRoute<CardRouteProp>();

  const {name, birth_year, eye_color, height, homeworld}: CharactersI =
    route.params?.item || {};
  const title = `It's ${name}`;

  return (
    <View style={[{marginTop: insets.top}]}>
      <Header title={title || 'Character'} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.cardText}>Сharacter description:</Text>
        <Text style={styles.cardText}>
          {name} was created at {birth_year} and he has {eye_color} eye,{' '}
          {height} height.
        </Text>
        <Text style={styles.cardText}>General info:</Text>
        <Text style={styles.cardText}>Home world: {homeworld}</Text>
      </View>
    </View>
  );
};

export default Card;
