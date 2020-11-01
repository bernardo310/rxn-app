import React from 'react'
import { View, Text } from 'react-native'
import ProductosView from '../Productos/ProductosView';

import Button from '../../components/core/Button'

import styles from './ProductoStyles';

const ProductoView = (props) => {
    const productoId = props.navigation.getParam('productoId')
    //buscar producto en db con el id
    return (
        <View style={styles.container}>
            <Text >Producto Screen</Text>
            <Button >Comprar</Button>

        </View>
    )
}

ProductoView.navigationOptions = navData => {
    const productoId = navData.navigation.getParam('productoId');
    //buscar nombre del producto en db con el id
    const producto = { name:'Ejemplo Producto'}
    return {
        headerTitle: producto.name,
    }
}

export default ProductoView
