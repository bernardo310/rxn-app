import React from 'react'
import { View, Text } from 'react-native'

import Button from '../../components/core/Button'

import styles from './ProductosStyles';

const ProductosView = (props) => {
    return (
        <View style={styles.container}>
            <Text >Productos Screen</Text>
            <Button onPress={() => {
                props.navigation.navigate({
                    routeName: 'Producto',
                    params: {
                        productoId: 'elIdDelProducto'
                    }
                })
            }}>Ver Producto</Button>

        </View>
    )
}

ProductosView.navigationOptions = navData => {
    return {
        headerTitle: 'Productos',
    }
}

export default ProductosView
