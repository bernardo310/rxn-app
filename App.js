import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'galio-framework';
import { theme, withGalio, GalioProvider } from 'galio-framework'
import { enableScreens } from 'react-native-screens';

import Navigator from './src/navigation/Navigator';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'montserrat-normal': require('./assets/fonts/Montserrat-Regular.ttf'),
    'montserrat-light': require('./assets/fonts/Montserrat-Light.ttf'),
    'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return <Navigator />;
}
