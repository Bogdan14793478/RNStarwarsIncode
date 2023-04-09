import React, {useCallback, useEffect} from 'react';
import {View, Text, Image, FlatList, Alert} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Droid, Girl, LittleDroid, Man} from '../../assets/images/light/index';
import styles from './styles';
import {
  getFirstCharackters,
  getFirstPlanets,
  getNewCharacters,
} from '../../api/charackters';
import {useNavigation} from '@react-navigation/native';

import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../hooks';
import {CharactersI, RootState} from '../../redux/actions/interface';
// import {saveChooseCharacter} from '../../redux/actions/typeActionCharackters';
import FieldCharacter from './FieldCharacter';

export type ParamAuthType = 'Phone number' | 'Email';

const Home = () => {
  console.log('Home reload');

  const insets = useSafeAreaInsets();
  const dispatch: any = useDispatch();
  const navigation = useNavigation();
  const {results, favoriteMans, favoriteWoman, favoriteDroid, next} =
    useAppSelector((state: RootState) => state.info);

  console.log('results Home', results);

  const fetchData = async () => {
    try {
      const result = await dispatch(getFirstCharackters());
      if (result) {
        await dispatch(getFirstPlanets());
      }
    } catch (error) {
      throw new Error(String(error));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const goToInfoCharackter = useCallback((item: CharactersI) => {
    // const chooseCharacter = results.find(item => item.name === name);
    // if (!chooseCharacter) {
    //   Alert.alert('Error', 'Character not found');
    //   return;
    // }
    // dispatch(saveChooseCharacter(chooseCharacter)); - choose to next, because render
    navigation.navigate('Card', {item});
  }, []);

  const renderItem = ({item}: {item: CharactersI}) => {
    return <FieldCharacter item={item} onPress={goToInfoCharackter} />;
  };

  const keyExtractor = (item: CharactersI) => item.name;

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
