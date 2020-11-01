import React from 'react'
import { View, Text } from 'react-native'

import styles from './ImagenesStyles';

const ImagenesView = () => {
    return (
        <View style={styles.container}>
            <Text >Imagenes Screen</Text>
        </View>
    )
}

ImagenesView.navigationOptions = navData => {
    return {
        headerTitle: 'Imágenes',
    }
}

export default ImagenesView
