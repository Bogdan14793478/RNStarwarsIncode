import React, {useCallback, useEffect} from 'react';
import {View, Text, Image, FlatList, Alert} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Droid, Girl, LittleDroid, Man} from '../../assets/images/light/index';
import styles from './styles';
import {getFirstCharackters, getNewCharacters} from '../../api/charackters';
import {useNavigation} from '@react-navigation/native';

import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../hooks';
import {CharactersI, RootState} from '../../redux/actions/interface';
import {saveChooseCharacter} from '../../redux/actions/typeActionCharackters';
import FieldCharacter from './FieldCharacter';

export type ParamAuthType = 'Phone number' | 'Email';

const Home = () => {
  console.log('Home reload');

  const insets = useSafeAreaInsets();
  const dispatch: any = useDispatch();
  const navigation = useNavigation();
  const {results, favoriteMans, favoriteWoman, favoriteDroid, next} =
    useAppSelector((state: RootState) => state.info);

  console.log('favoriteDroid', favoriteDroid);

  useEffect(() => {
    console.log('UseEffect reload');
    dispatch(getFirstCharackters());
    // dispatch(getFirstPlanets())
  }, [dispatch]);

  const renderItem = useCallback(
    ({item}: {item: CharactersI}) => {
      const goToInfoCharackter = (name: string) => {
        const chooseCharacter = results.find(item => item.name === name);
        chooseCharacter && dispatch(saveChooseCharacter(chooseCharacter));
        chooseCharacter && navigation.navigate('Card', {name});
        if (!chooseCharacter) {
          Alert.alert('Error', 'Character not found');
        }
      };
      return (
        <FieldCharacter
          homeworld={item.homeworld}
          name={item.name}
          gender={item.gender}
          onPress={goToInfoCharackter}
        />
      );
    },
    [navigation, results, dispatch],
  );

  const keyExtractor = useCallback((item: CharactersI) => item.name, []);

  const getItemLayout = useCallback(
    (data: CharactersI[] | null | undefined, index: number) => ({
      length: 100 + 10,
      offset: 100 * index,
      index,
    }),
    [],
  );

  const loadNewCharacters = () => {
    console.log('Load');
    console.log(next, 'next');
    if (next !== null) {
      const number = next.split('=');
      dispatch(getNewCharacters(number[1]));
    }
    if (next === null) {
      Alert.alert('End list', 'You get all characters');
    }
  };

  return (
    <View style={[styles.container, {marginTop: insets.top}]}>
      <Image style={styles.backgroundImage} source={Droid} />

      <View style={styles.containerBox}>
        <ViewBox text="Man" imgPhoto={Man} countFavorite={favoriteMans} />
        <ViewBox text="Girl" imgPhoto={Girl} countFavorite={favoriteWoman} />
        <ViewBox
          text="Droid"
          imgPhoto={LittleDroid}
          countFavorite={favoriteDroid}
        />
      </View>
      {results && (
        <View>
          <FlatList
            data={results}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            getItemLayout={getItemLayout}
            onEndReached={loadNewCharacters}
            onEndReachedThreshold={0.5}
          />
        </View>
      )}
    </View>
  );
};

export default Home;

interface ViewBoxProps {
  text: string;
  imgPhoto: any;
  countFavorite: string[];
}

function ViewBox({text, imgPhoto, countFavorite}: ViewBoxProps) {
  return (
    <View style={styles.boxFavoriteView}>
      <Image style={styles.littleImg} source={imgPhoto} />
      <Text style={styles.box}>
        {text}:{countFavorite.length}
      </Text>
    </View>
  );
}
