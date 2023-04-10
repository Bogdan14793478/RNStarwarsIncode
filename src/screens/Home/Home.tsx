import React, {useCallback, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Droid, Girl, LittleDroid, Man} from '../../assets/images/light/index';
import styles from './styles';
import {
  getFirstCharackters,
  getFirstPlanets,
  getNewCharacters,
  getNewPlanets,
} from '../../api/charackters';
import {useNavigation} from '@react-navigation/native';

import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../hooks';
import {CharactersI, RootState} from '../../redux/actions/interface';
import FieldCharacter from './FieldCharacter';
import {loadNewInfo} from '../../utils/helpers';
import {Loader} from '../../components/Loader/Loader';
import {clearFavoriteCharacters} from '../../redux/actions/typeActionCharackters';

export type ParamAuthType = 'Phone number' | 'Email';

const Home = () => {
  const insets = useSafeAreaInsets();
  const dispatch: any = useDispatch();
  const navigation = useNavigation();
  const {
    results: resultsCharacters,
    favoriteMans,
    favoriteWoman,
    favoriteDroid,
    next,
    nextPlanets,
  } = useAppSelector((state: RootState) => state.info);

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
    if (nextPlanets === null) {
      return;
    }
    function loadNew() {
      const type = 'planet';
      dispatch(loadNewInfo(nextPlanets, getNewPlanets, type));
    }

    const isAllCharactersWithPlanet = () => {
      for (let i = 0; i < resultsCharacters.length + 1; i++) {
        if (
          resultsCharacters[i]?.homeworld.length !== undefined &&
          resultsCharacters[i]?.homeworld.length > 29
        ) {
          setTimeout(loadNew, 2000);
        }
      }
    };
    isAllCharactersWithPlanet();
  }, [nextPlanets]);

  useEffect(() => {
    fetchData();
  }, []);

  const goToInfoCharackter = useCallback((item: CharactersI) => {
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
    const type = 'people';
    dispatch(loadNewInfo(next, getNewCharacters, type));
  };

  const clearCounter = () => {
    dispatch(clearFavoriteCharacters(true));
  };

  return (
    <View
      style={[
        styles.container,
        {marginTop: insets.top, marginBottom: insets.bottom + 30},
      ]}>
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
      {resultsCharacters.length > 1 && (
        <TouchableOpacity style={styles.clearBtn} onPress={clearCounter}>
          <Text>Clear All Count</Text>
        </TouchableOpacity>
      )}

      {resultsCharacters && (
        <View>
          <FlatList
            data={resultsCharacters}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            getItemLayout={getItemLayout}
            onEndReached={loadNewCharacters}
            onEndReachedThreshold={0.5}
            contentContainerStyle={{marginBottom: 100}}
          />
        </View>
      )}
      {!resultsCharacters.length && <Loader />}
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
