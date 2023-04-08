import React from 'react';
import {AuthNavigator} from './navigators/AuthNavigator';
import {useAppSelector} from '../hooks';
import {RootState} from '../redux/actions/interface';

export const AppContainer = () => {
  console.log('App container work');

  const {isLoad} = useAppSelector((state: RootState) => state.info);
  console.log('isLoad', isLoad);
  if (isLoad) {
    return <AuthNavigator />;
  }

  return null;
};
