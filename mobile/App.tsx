import React from 'react';
import { View, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Routes from './src/Routes';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#388E3C',
    card: '#388E3C',
  },
};

const App: React.FC = () => {
  return (
    <PaperProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(0, 0, 0, 0.2)"
        translucent
      />
      <View
        style={{
          backgroundColor: '#388E3C',
          height: Constants.statusBarHeight,
        }}
      />
      <Routes />
    </PaperProvider>
  );
};

export default App;
