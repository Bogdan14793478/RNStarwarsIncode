import {legacy_createStore as createStore} from 'redux';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './src/redux/reducers';

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
