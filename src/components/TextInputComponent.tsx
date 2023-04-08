import React from 'react';
import {TextInput} from 'react-native';
import {TextInputComponentProps} from '../utils/interface';

export const TextInputComponent: React.FC<TextInputComponentProps> = ({
  value,
  onChangeText,
  name,
  autoComplete,
  ...props
}) => (
  <TextInput
    autoComplete={autoComplete}
    value={value}
    onChangeText={value => onChangeText(name, value)}
    {...props}
  />
);
