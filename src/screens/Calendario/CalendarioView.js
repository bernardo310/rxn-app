import React from 'react'
import { View, Text } from 'react-native'
import Button from '../../components/core/Button'

import styles from './CalendarioStyles';

const CalendarioView = (props) => {
    return (
        <View style={styles.container}>
            <Text >Calendario Screen</Text>
            <Button onPress={() => {
                props.navigation.navigate({
                    routeName: 'Evento'
                })
            }}>Ir a evento</Button>
        </View>
    )
}

CalendarioView.navigationOptions = navData => {
    return {
        headerTitle: 'Calendario',
    }
}

export default CalendarioView
