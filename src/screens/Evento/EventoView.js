import React from 'react'
import { View, ScrollView, Text, ActivityIndicator} from 'react-native'
import Button from '../../components/core/Button';
import styles from './EventoStyles';
import Bullet from '../../components/core/Bullet';
import useEvent from '../../hooks/useEvent';
import MapView from '../../components/map/MapsView';
import moment from 'moment';
import COLORS from '../../constants/Colors';


const EventoView = (props) => {

        const idEvent = props.navigation.getParam('idEvent');
        const { loading, data } = useEvent({ idEvent });
        const {name, description, startDate, endDate, lat, lng, address} = data;
        moment.locale();
        const inicio = moment(startDate).format('ll');
        const fin = moment(endDate).format('ll');
        let fecha = '';
        if (inicio==fin){
            fecha = inicio;
        }
        else{
            fecha = 'Del '+inicio+' al '+fin;
        }
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.bullets}>
                    <Bullet icon='calendar-day'>{fecha}</Bullet>
                    <Bullet icon='list-ul'>{description}</Bullet>
                    <Bullet icon='map-marker-alt'>{address}</Bullet>
                </View>
                <Text style={styles.text}>Ubicación</Text>
                {(!loading && lat) ? (
				<MapView name={name} date={inicio} lat={lat} lng={lng}/>
			    ) : (
					<ActivityIndicator size="large" color={COLORS.accentYellow} />
				)}
                
                <View style={styles.buttonContainer}>
                    <Button onPress={() => props.navigation.navigate(
                                    {routeName: 'Registro', params: {idEvent: idEvent}}
                    )}>Regístrate en este evento</Button>
                </View>

            </ScrollView>
        );
};

EventoView.navigationOptions = navData => {
    return {
        headerTitle: 'Evento',
    }
}

export default EventoView
