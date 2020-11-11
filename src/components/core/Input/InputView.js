import React from 'react'
import {View, TextInput, StyleSheet, Text } from 'react-native'
import COLORS from '../../../constants/Colors';

const InputView = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
            <View style={styles.inputContainer}>
                <TextInput {...props} style={{ ...styles.input, ...props.style }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        paddingTop: 20
    },
    text:{
        fontFamily: 'montserrat-bold',
        paddingBottom: 5,
        fontSize: 16
    },
    input: {
        fontFamily: 'montserrat-normal',
        width: 500,
        justifyContent: 'center'
    },
    inputContainer: {
        paddingLeft: 5,
        paddingTop: 5,
        paddingBottom: 5,
        maxWidth: '100%',
        alignItems: 'flex-start',
        borderWidth: 2,
        borderColor: COLORS.accentYellow,
        borderRadius: 8
    }
})

export default InputView
