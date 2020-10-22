import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'galio-framework';
import { theme, withGalio, GalioProvider } from 'galio-framework'
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <View style={styles.cardContainer}>

        <Card
          height={300}
          borderless
          style={styles.card}
          title="Christopher Moon"
          caption="139 minutes ago"
          location="Los Angeles, CA"
          avatar="http://i.pravatar.cc/100?id=skater"
          imageStyle={styles.cardImageRadius}
          imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
          image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"
        />
        <Card
          height={300}
          borderless
          style={styles.card}
          title="Christopher Moon"
          caption="139 minutes ago"
          location="Los Angeles, CA"
          avatar="http://i.pravatar.cc/100?id=skater"
          imageStyle={styles.cardImageRadius}
          imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
          image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff'
  },
  cardContainer: {
    flex: 1
  }
});
