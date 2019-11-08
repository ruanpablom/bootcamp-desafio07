import React from 'react';
import { StatusBar } from 'react-native';

import colors from './styles/colors';

import './config/ReactotronConfig';

import Routes from './routes';
import NavigationService from './services/navigation';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </>
  );
}
