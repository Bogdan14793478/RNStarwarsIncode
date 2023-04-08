// import 'react-native-gesture-handler';
import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import configureStore from './configureStore';
import {Provider} from 'react-redux';

import {SafeAreaView} from 'react-native-safe-area-context';
import {AppContainer} from './src/navigation/AppContainer';

const store = configureStore();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer fallback={<Text>Loading...</Text>}>
          <AppContainer />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
