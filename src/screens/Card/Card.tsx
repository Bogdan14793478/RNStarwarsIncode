import React from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

import {useAppSelector} from '../../hooks';
import {RootState} from '../../redux/actions/interface';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Header} from '../../components/Header/Header';

import styles from './styles';

const Card = () => {
  const insets = useSafeAreaInsets();

  const route = useRoute();
  console.log(route.params, 'its id');
  const title = `It's ${route?.params?.name}`;

  const {chooseCharacter} = useAppSelector((state: RootState) => state.info);
  console.log(chooseCharacter, 'chooseCharacterCard');
  return (
    <View style={[{marginTop: insets.top}]}>
      <Header title={title || 'Character'} />
      <View style={styles.descriptionContainer}>
        <Text>Сharacter description:</Text>
        <Text>
          {chooseCharacter?.name} was created at {chooseCharacter?.birth_year}{' '}
          and he has {chooseCharacter?.eye_color} eye, {chooseCharacter?.height}{' '}
          height.
        </Text>
        <Text>General info:</Text>
        {/* show planet, starship, film */}
      </View>
    </View>
  );
};

export default Card;
