import React from 'react'
import { View, Text } from 'react-native'

import Button from '../../components/core/Button'

import styles from './DonacionStyles';

const DonacionView = () => {
    return (
        <View style={styles.container}>
            <Text >Donacion Screen</Text>
            <Button >Ir a donar</Button>

        </View>
    )
}

DonacionView.navigationOptions = navData => {
    return {
        headerTitle: 'Donación',
    }
}

export default DonacionView
