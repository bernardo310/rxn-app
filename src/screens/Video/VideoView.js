import React from 'react'
import { View, Text } from 'react-native'

import styles from './VideoStyles';

const VideoView = (props) => {
    const videoId = props.navigation.getParam('videoId')
    //buscar video en con videoId
    return (
        <View style={styles.container}>
            <Text >Video Screen</Text>

        </View>
    )
}

VideoView.navigationOptions = navData => {
    const videoId = navData.navigation.getParam('videoId')
    //buscar nombre del video en db con el id
    const video = { name:'Video Title 1'}

    return {
        headerTitle: video.name,
    }
}

export default VideoView
