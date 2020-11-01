import React from 'react'
import { View, Text } from 'react-native'

import styles from './HomeStyles';

const HomeView = () => {
    return (
        <View style={styles.container}>
            <Text >Home Screen</Text>
        </View>
    )
}

HomeView.navigationOptions = navData => {
    return {
        headerTitle: 'Home',
    }
}

export default HomeView
