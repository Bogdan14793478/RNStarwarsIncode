import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  getFirstCharacters,
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
import {Droid, Girl, LittleDroid, Man} from '../../assets/images/light/index';

import styles from './styles';
import {useFilterData} from '../../hooks/filterData';

const Home = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [filteredData, setFilteredData] = useState<
    (CharactersI | undefined)[] | undefined
  >([]);

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

  const fetchData = async (): Promise<void> => {
    try {
      const result = await dispatch(getFirstCharacters());
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
      for (let i = 0; i < resultsCharacters.length; i++) {
        if (
          resultsCharacters[i] !== undefined &&
          resultsCharacters[i].homeworld.length > 29
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

  const goToInfoCharacter = useCallback((item: CharactersI) => {
    navigation.navigate('Card', {item});
  }, []);

  const renderItem = useCallback(({item}: {item: CharactersI}) => {
    return <FieldCharacter item={item} onPress={goToInfoCharacter} />;
  }, []);

  const keyExtractor = (item: CharactersI) => item.name;

  const getItemLayout = useCallback(
    (data: CharactersI[] | null | undefined, index: number) => ({
      length: 100 + 10,
      offset: 100 * index,
      index,
    }),
    [],
  );

  const loadNewCharacters = (): void => {
    const type = 'people';
    dispatch(loadNewInfo(next, getNewCharacters, type));
  };

  const clearCounter = (): void => {
    dispatch(clearFavoriteCharacters(true));
  };

  const showFilterData = useFilterData({
    resultsCharacters: resultsCharacters || [],
    inputValue,
  });

  useEffect(() => {
    setFilteredData(showFilterData);
  }, [inputValue]);

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
      {resultsCharacters.length > 0 && (
        <TouchableOpacity style={styles.clearBtn} onPress={clearCounter}>
          <Text>Clear All Count</Text>
        </TouchableOpacity>
      )}

      {resultsCharacters.length > 0 && (
        <TextInput
          placeholder="Search characters"
          style={styles.searchInput}
          value={inputValue}
          onChangeText={setInputValue}
        />
      )}

      {resultsCharacters && (
        <View>
          <FlatList
            data={
              filteredData && filteredData.length > 0
                ? filteredData
                : resultsCharacters
            }
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            getItemLayout={getItemLayout}
            onEndReached={loadNewCharacters}
            onEndReachedThreshold={0.5}
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
