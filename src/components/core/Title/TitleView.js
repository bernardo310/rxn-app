import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Colors from '../../../constants/Colors'

const TitleView = (props) => {
    return (
        <Text style={[styles.title, {...props.style}]}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'montserrat-bold',
        fontSize: 22,
        color: Colors.primaryBlack,
        textAlign: 'center',
        marginVertical: 20,
        marginHorizontal: 10,
        marginBottom: 5,
    }   
})

export default TitleView
