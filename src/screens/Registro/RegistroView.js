import React from 'react'
import { View, Text } from 'react-native'

import styles from './RegistroStyles';

const RegistroView = () => {
    return (
        <View style={styles.container}>
            <Text >Registro Screen</Text>
        </View>
    )
}

RegistroView.navigationOptions = navData => {
    return {
        headerTitle: 'Registro',
    }
}

export default RegistroView
