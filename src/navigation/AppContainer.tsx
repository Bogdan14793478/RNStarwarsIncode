import React from 'react';
import {AuthNavigator} from './navigators/AuthNavigator';
import {useAppSelector} from '../hooks';
import {RootState} from '../redux/actions/interface';

export const AppContainer = () => {
  const {isLoad} = useAppSelector((state: RootState) => state.info);
  if (isLoad) {
    return <AuthNavigator />;
  }

  return null;
};
