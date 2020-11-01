import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Button } from 'galio-framework';
import Colors from '../../../constants/Colors'

const ButtonView = (props) => {
    return (
        <Button
            style={styles.btn}
            onPress={props.onPress}
            color={Colors.accentBlue}
        >
            <Text style={styles.btnText}>{props.children}</Text>
        </Button>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: 300,
        height: 48,
        paddingVertical:5
    },
    btnText: {
        fontFamily: 'montserrat-normal',
        fontSize: 20,
        color: Colors.primaryWhite,
        textAlign: 'center',
        
    }
})

export default ButtonView
