import React from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Card } from 'galio-framework';
import Colors from '../../../constants/Colors'
import logo from '../../../../assets/images/logo.png'
const logoUri = Image.resolveAssetSource(logo).uri
const VideoCardView = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container} videoId={props.videoId}>

            <Card
                style={styles.videoCard}
                flex
                borderless
                title={props.title}
                avatar={logoUri}
                location={false}
                imageStyle={styles.thumbnail}
                // imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
                image={props.thumbnail}
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

export default VideoCardView
