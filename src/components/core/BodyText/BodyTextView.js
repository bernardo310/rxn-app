import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Colors from '../../../constants/Colors'

const BodyTextView = (props) => {
    return (
        <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'montserrat-normal',
        fontSize: 18,
        color: Colors.primaryBlack,
        textAlign: 'left',
        width: '85%',
        marginVertical: 5,
    }   
})

export default BodyTextView
