import React from 'react'
import { View, Text, Linking, Image } from 'react-native'


import Button from '../../components/core/Button'

import styles from './ProductoStyles';

const url = 'https://baymarxn.com/products/'

const ProductoView = (props) => {
    const title = props.navigation.getParam('title')
    const product = props.navigation.getParam('product')
    image = product?.image.src;
    const regex = /(<([^>]+)>)/ig;
    const result = product.body_html.replace(regex, '');
    // //buscar producto en db con el id
    console.log(image)
    return (
        <View style={styles.container}>
            {image && <Image source={{ uri: image }} style={{ width: '100%', height: 200 }} />}
            <View >
                <Text style={styles.title}>{title}</Text>
                <Text>{result}</Text>
            </View>
            <Button
                onPress={() => Linking
                    .openURL(`${url}${product.handle}`)}
                btnTextSize={14}
            >
                Comprar
            </Button>
        </View>
    )
}

ProductoView.navigationOptions = navData => {
    const productoId = navData.navigation.getParam('productoId');
    //buscar nombre del producto en db con el id
    const producto = { name: 'Ejemplo Producto' }
    return {
        headerTitle: producto.name,
    }
}

export default ProductoView
