import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Button } from 'galio-framework';
import Colors from '../../../constants/Colors'

const ButtonView = (props) => {
    const btnTextSize = props.btnTextSize != undefined ? props.btnTextSize : 20;
    return (
        <Button
            style={[styles.btn, { ...props.style }]}
            onPress={props.onPress}
            color={Colors.accentBlue}
            disabled={props.disabled}
            loading={props.disabled}
        >
            <Text style={ {...styles.btnText, fontSize: btnTextSize }}  > {props.children}</Text>
        </Button>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: 300,
        height: 48,
        paddingVertical: 5
    },
    btnText: {
        fontFamily: 'montserrat-normal',
        color: Colors.primaryWhite,
        textAlign: 'center',

    }
})

export default ButtonView
