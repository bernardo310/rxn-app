import React from 'react'
import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import ProductCard from '../../components/core/ProductCard';
import COLORS from '../../constants/Colors';

import useProducts from '../../hooks/useProducts'

import styles from './ProductosStyles';

const ProductosView = (props) => {
    const [loading, data] = useProducts();

    const productClickHandler = (product) => {
        props.navigation.navigate({
            routeName: 'Producto',
            params: {
                product: product,
                title: product.title
            }
        })
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {!loading ?
                (
                    data.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onPress={() => productClickHandler(product)}
                        />
                    ))
                )
                : (
                    <ActivityIndicator size="large" color={COLORS.accentYellow} />
                )
            }


        </ScrollView>
    )
}

ProductosView.navigationOptions = navData => {
    return {
        headerTitle: 'Productos',
    }
}

export default ProductosView
