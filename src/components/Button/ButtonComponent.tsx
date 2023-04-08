import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import styles from './styles';

interface ButtonComponentProps {
  title: string;
  isDirty: boolean;
  onPress: () => Promise<void>;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  onPress,
  title,
  isDirty,
}) => {
  console.log(isDirty, 'isDirty');
  const showColorBtn = isDirty
    ? [styles.text, styles.textFull]
    : [styles.text, styles.textEmpty];
  return (
    <View
      style={
        isDirty
          ? [styles.container, styles.containerFull]
          : [styles.container, styles.containerEmpty]
      }>
      <TouchableOpacity onPress={onPress}>
        <Text style={showColorBtn}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;
