import React, {memo, useCallback} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {RootState} from '../../redux/actions/interface';
import {choosefavoriteDroid} from '../../redux/actions/typeActionCharackters';
import {EmptyLike, FullLike} from '../../assets/images/light';

import styles from './styles';
import {useAppSelector} from '../../hooks';
import {useDispatch} from 'react-redux';

interface FieldCharacterProps {
  name: string;
  gender: string;
  homeworld: string;
  onPress: (name: string) => void;
}

const FieldCharacter: React.FC<FieldCharacterProps> = ({
  name,
  gender,
  homeworld,
  onPress,
}) => {
  console.log('FieldCharacter reload');

  const {favoriteMans, favoriteWoman, favoriteDroid} = useAppSelector(
    (state: RootState) => state.info,
  );
  const dispatch: any = useDispatch();

  const chooseLikefavoriteMans = favoriteMans.includes(name);
  const chooseLikefavoriteWoman = favoriteWoman.includes(name);
  const chooseLikefavoriteDroid = favoriteDroid.includes(name);
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
    dispatch(choosefavoriteDroid({name, gender}));
  };

  const handleClick = useCallback(() => {
    onPress(name);
  }, [name]);

  return (
    <View style={styles.fileCharacters}>
      <TouchableOpacity onPress={changeLike}>
        <Image
          style={styles.likeImg}
          source={consistLike() ? FullLike : EmptyLike}
        />
      </TouchableOpacity>

      <View style={styles.cardTextContainer}>
        <Text style={styles.cardText}>Name: {name}</Text>
        <Text style={styles.cardText}>Gender: {gender}</Text>
        <Text style={styles.cardText}>Home World: {homeworld}</Text>
        <View style={styles.openInfo}>
          <TouchableOpacity onPress={handleClick}>
            <Text>show info</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default memo(FieldCharacter);
