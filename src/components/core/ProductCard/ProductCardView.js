import React from 'react'
import { StyleSheet,  Image, TouchableOpacity } from 'react-native'
import { Card } from 'galio-framework';
import logo from '../../../../assets/images/logo.png'
const logoUri = Image.resolveAssetSource(logo).uri

const ProductCardView = ({product, onPress}) => {
    image = product?.image.src;
    if (!image) {
        return undefined
    }

    return (
        <TouchableOpacity onPress={onPress} style={styles.container} key={product.id}>
            <Card
                style={styles.videoCard}
                flex
                borderless
                title={product.title}
                avatar={logoUri}
                location={false}
                imageStyle={styles.thumbnail}
                image={image}
                caption={`$${product.variants[0].price}`}
                footerStyle={styles.footer}
                
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    videoCard: {
        width: '90%',
        fontFamily: 'montserrat-bold',
        marginVertical: 7,
    },
    thumbnail: {
        height: 170
    },
    footer: {
        alignItems: 'stretch',
        paddingBottom: 5
    },
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'    
 

    }
})

export default ProductCardView
