import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import colors from './styles/colors';

import './config/ReactotronConfig';

import Routes from './routes';
import NavigationService from './services/navigation';

import store from './store/index';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </Provider>
  );
}
