import React from 'react'
import { View, ScrollView, Text, Linking, Image } from 'react-native'
import BodyText from '../../components/core/BodyText'
import { WebView } from 'react-native-webview';

import Button from '../../components/core/Button'

import styles from './ProductoStyles';

const url = 'https://baymarxn.com/products/'

const ProductoView = (props) => {
    const title = props.navigation.getParam('title')
    const product = props.navigation.getParam('product')
    image = product?.image.src;
    const regex = /(<([^>]+)>)/ig;
    const result = product.body_html.replace(regex, '\n').trim().replace(/\n\s*\n\s*\n/g, '\n\n');
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {image && <Image source={{ uri: image }} style={{ width: '100%', height: 200 }} />}
            <View >
                <Text style={styles.title}>{title}</Text>
                <BodyText style={styles.description}>
                {result}
            </BodyText>
            {/* <WebView source={{ html: result }} style={{ width: '100%' }} /> */}
            </View>
            <Button
                onPress={() => Linking
                    .openURL(`${url}${product.handle}`)}
                btnTextSize={14}
            >
                Comprar
            </Button>
        </ScrollView>
    )
}

ProductoView.navigationOptions = navData => {
    const title = navData.navigation.getParam('title');
    //buscar nombre del producto en db con el id
    const producto = { name: 'Ejemplo Producto' }
    return {
        headerTitle: title,
    }
}

export default ProductoView
