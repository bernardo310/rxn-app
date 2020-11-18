import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class MapsView extends React.Component {
  render() {
    const {name, date, lat, lng} = this.props;
    const latTemp= 25.659787;
    const lngTemp= -100.421100;
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} 
        initialRegion={{
            latitude: latTemp,
            longitude: lngTemp,
            latitudeDelta: .05,
            longitudeDelta: .09
        }}
        showsUserLocation={true}
        >
            <MapView.Marker
                coordinate={{
                    latitude: latTemp,
                    longitude: lngTemp,}}
                title={name}
                description={date}
            />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  mapStyle: {
    width: 350,
    height: 350
  },
});
