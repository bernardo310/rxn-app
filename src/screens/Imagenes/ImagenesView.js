import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './ImagenesStyles';
const ImagenesView = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: 'https://www.instagram.com/p/CGs0pKJhs23/?igshid=eysnnnvfz6kq'}}></Image>
        </View>
        
    )
}

ImagenesView.navigationOptions = navData => {
    return {
        headerTitle: 'Imágenes',
    }
}

export default ImagenesView
