import React, { useState } from 'react'
import { View, Alert, Text } from 'react-native'
import styles from './ImagenesStyles';
import useEventsId from '../../hooks/useEvenstId';
import useImages from '../../hooks/useImages';
import DropDownPicker from 'react-native-dropdown-picker';
import Button from '../../components/core/Button';
import ImageLayout from '../../components/core/ImageLayout';
import COLORS from '../../constants/Colors';

const ImagenesView = () => {
    const [selectedEvent, setSelectedEvent] = useState('');
    const [idEvent, setIdEvent] = useState(undefined);
    const [listaImagenes, setListaImagenes] = useState([]);

    const {loading, data : images} = useImages(idEvent);
    const {data : listEvents} = useEventsId();
    let names = [];

    listEvents.forEach( ({id, name}) => {
        names.push({value: name, label: name, id: id});
    });

    const filterImages = () => {
        if(selectedEvent === "")
            Alert.alert('No hay evento seleccionado', 'Debe seleccionar un evento', [{text: 'Entendido', style: 'destructive'}]);
        else{
            const event = names.find(({value})  => value===selectedEvent.value);  
            
            setIdEvent(event.id);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.filter}>
                <DropDownPicker
                    placeholder="Selecciona un evento"
                    searchable={true}
                    searchablePlaceholder="Buscar un evento"
                    searchableError={() => <Text>No se encontraron resultados</Text>}
                    items ={names}
                    containerStyle={{height: 55}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={setSelectedEvent}
                    //selectedLabelStyle={{color: COLORS.accentYellow}}
                />
                <View style={styles.buttonContainer}>
                    <Button onPress={filterImages}>Filtrar imagenes</Button>
                </View>
            </View>
            <View style={styles.imageContainer}>
                <ImageLayout images={images}/>
            </View>
    </View>
    
    )
}

ImagenesView.navigationOptions = navData => {
    return {
        headerTitle: 'Galería de fotos',
    }
}

export default ImagenesView
