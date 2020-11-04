import React from 'react'
import { View, Text } from 'react-native'
import Button from '../../components/core/Button'
import useEventHook from '../../helpers/getEventHook';

import styles from './CalendarioStyles';

const CalendarioView = (props) => {
    const startDate = '2020-10-21';
    const endDate = '2020-12-25';
    const {loading, data} = useEventHook({startDate, endDate});
    
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
