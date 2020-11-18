import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import COLORS from '../../../constants/Colors';

const BulletView = (props) => {
    const link = props.link;
    return (
        <View style={styles.bulletContainer}>
            {props.icon === 'rxn' ?
                <Image source={require('../../../../assets/images/logo.png')} style={styles.bulletImage} />
                :
                <FontAwesome5 name={props.icon} style={styles.bulletIcon} size={25} color={COLORS.accentYellow} />
            }
            <View style={styles.bulletTextContainer}>
                <Text style={{...styles.bulletText, textDecorationLine: (props.link ? 'underline': 'none')}} onPress={props.click}>{props.children}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bulletContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: '100%',
        height: '100%',
    },
    bulletIcon: {
        width: 40,
        height: 40,
        marginRight: 10,
        alignSelf:'center',
    },
    bulletImage: {
        width: 40,
        height: 40,
        marginRight: 10,
        alignSelf:'center',
        tintColor: '#F7C744'
    },
    bulletTextContainer: {
        flex: 1
    },
    bulletText: {
        fontFamily: 'montserrat-normal',
        fontSize: 16,
        color: COLORS.primaryBlack,
        textAlign: 'left',
    }
})

export default BulletView
