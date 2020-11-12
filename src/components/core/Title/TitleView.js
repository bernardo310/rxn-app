import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Colors from '../../../constants/Colors'

const TitleView = (props) => {
    return (
        <Text style={styles.title}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'montserrat-bold',
        fontSize: 20,
        color: Colors.primaryBlack,
        textAlign: 'center',
        marginVertical: 25,
    }   
})

export default TitleView
