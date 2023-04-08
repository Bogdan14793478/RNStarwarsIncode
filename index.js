/**
 * @format
 */
import 'react-native-gesture-handler'; // only for Android and iOS
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import * as Sentry from '@sentry/react-native'; // only for React Native

Sentry.init({
  dsn: 'https://26b90711b280468eb3585484ec2c69aa@o4504932809834496.ingest.sentry.io/4504932812193792',
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
});

AppRegistry.registerComponent(appName, () => Sentry.wrap(App));

// AppRegistry.registerComponent(appName, () => App);
