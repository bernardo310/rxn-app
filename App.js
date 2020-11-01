import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Card } from 'galio-framework';
import { theme, withGalio, GalioProvider } from 'galio-framework'

import Home from './src/screens/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    backgroundColor: '#fff'
  },
  cardContainer: {
    // flex: 1
  }
});
