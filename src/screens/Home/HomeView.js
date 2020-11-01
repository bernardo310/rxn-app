import React, { Component } from 'react';
import { View } from 'react-native';

import { PageTitle } from '../../components/core';

import styles from './HomeStyles';

class HomeView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PageTitle
          text="Hello world"
        />
      </View>
    )
  }
}

export default HomeView;
