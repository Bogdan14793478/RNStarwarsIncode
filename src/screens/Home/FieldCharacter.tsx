import React, {memo} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {CharactersI, RootState} from '../../redux/actions/interface';
import {choosefavoriteDroid} from '../../redux/actions/typeActionCharackters';
import {EmptyLike, FullLike} from '../../assets/images/light';

import styles from './styles';
import {useAppSelector} from '../../hooks';
import {useDispatch} from 'react-redux';

interface FieldCharacterProps {
  item: CharactersI;
  onPress: (name: CharactersI) => void;
}

const FieldCharacter: React.FC<FieldCharacterProps> = ({item, onPress}) => {
  const {favoriteMans, favoriteWoman, favoriteDroid} = useAppSelector(
    (state: RootState) => state.info,
  );
  const dispatch: any = useDispatch();

  const chooseLikefavoriteMans = favoriteMans.includes(item.name);
  const chooseLikefavoriteWoman = favoriteWoman.includes(item.name);
  const chooseLikefavoriteDroid = favoriteDroid.includes(item.name);
  const consistLike = () => {
    if (chooseLikefavoriteMans) {
      return true;
    }
    if (chooseLikefavoriteWoman) {
      return true;
    }
    if (chooseLikefavoriteDroid) {
      return true;
    }
    return false;
  };

  const changeLike = () => {
    dispatch(choosefavoriteDroid({name: item.name, gender: item.gender}));
  };

  const handleClick = () => {
    onPress(item);
  };

  return (
    <View style={styles.fileCharacters}>
      <TouchableOpacity onPress={changeLike}>
        <Image
          style={styles.likeImg}
          source={consistLike() ? FullLike : EmptyLike}
        />
      </TouchableOpacity>

      <View style={styles.cardTextContainer}>
        <Text style={styles.cardText}>Name: {item.name}</Text>
        <Text style={styles.cardText}>Gender: {item.gender}</Text>
        <Text style={styles.cardText}>Home World: {item.homeworld}</Text>
      </View>
      <View style={styles.openInfo}>
        <TouchableOpacity onPress={handleClick}>
          <Text>show info</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(FieldCharacter);
