import React from 'react'
import { View, Text } from 'react-native'
import Button from '../../components/core/Button';
import styles from './EventoStyles';

const EventoView = (props) => {
    return (
        <View style={styles.container}>
            <Text >Evento Screen</Text>
            <Button onPress={() => {
                props.navigation.navigate({
                    routeName: 'Registro'
                })
            }}>Regístrate para este evento</Button>

        </View>
    )
}

EventoView.navigationOptions = navData => {
    return {
        headerTitle: 'Evento',
    }
}

export default EventoView
