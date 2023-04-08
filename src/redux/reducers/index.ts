import {combineReducers} from 'redux';
import {stateInfoReducer} from './charackters';

export const rootReducer = combineReducers({
  info: stateInfoReducer,
});
