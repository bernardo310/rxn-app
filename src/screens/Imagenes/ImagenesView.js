import React, { useState, useEffect } from 'react'
import { View, ScrollView, Alert } from 'react-native'
import styles from './ImagenesStyles';
import useEventsId from '../../hooks/useEvenstId';
import useImages from '../../hooks/useImages';
import { Dropdown } from 'react-native-material-dropdown-v2'
import Button from '../../components/core/Button';
import ImageLayout from "react-native-image-layout";

const ImagenesView = () => {
    const [selectedEvent, setSelectedEvent] = useState('');
    const [idEvent, setIdEvent] = useState(undefined);
    const [imagenes, setImagenes] = useState([]);

    const {loading, data : images} = useImages(idEvent);
    const {data : listEvents} = useEventsId();
    let names = [];

    listEvents.forEach( ({id, name}) => {
        names.push({value: name, id: id});
    });

    const updateImages = () => {
        let imageSrc = [];
        images.forEach(({source}) => {
            imageSrc.push({uri: source});
        });
        setImagenes(imageSrc);
        console.log(imagenes);
    };
    
    const filterImages = () => {
        if(selectedEvent === "")
            Alert.alert('No hay evento seleccionado', 'Debe seleccionar un evento', [{text: 'Entendido', style: 'destructive'}]);
        else{
            const event = names.find(({value})  => value===selectedEvent );  
            setIdEvent(event.id);
            updateImages();
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.filter}>
                    <Dropdown
                        value=""
                        label="Seleccionar Evento"
                        data={names}
                        itemCount={10}
                        onChangeText={setSelectedEvent}
                    />
                    <View style={styles.buttonContainer}>
                        <Button onPress={filterImages}>Filtrar imagenes</Button>
                    </View>
                </View>
                <View style={styles.imageGallery}>
                    <ImageLayout
                        images={imagenes}
                    />
                </View>
            </View>
        </ScrollView>
        
    )
}

ImagenesView.navigationOptions = navData => {
    return {
        headerTitle: 'Imágenes',
    }
}

export default ImagenesView
