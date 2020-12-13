import React from 'react'
import { View, Text } from 'react-native'

import styles from './VideoStyles';

const VideoView = (props) => {
    const videoId = props.navigation.getParam('videoId')
    //buscar video en con videoId
    return (
        <View style={styles.container}>
<<<<<<< Updated upstream
            <Text >Video Screen</Text>

=======
             <YoutubePlayer
                height={250}
                width={'100%'}
                play={false}
                videoId={videoId}
                webViewStyle={{opacity:0.99}} //hack to avoid crash on android
                style={styles.video}
            /> 
            <Title style={styles.videoTitle}>{title}</Title>
            <Button onPress={() => Linking.openURL('https://www.youtube.com/channel/UCg_KQd362R7VIvN08i6ZVXw')} style={{backgroundColor: '#FF0000', marginTop: 20, height: 30, width:250}} btnTextSize={14}>
                Ver Canal de Youtube
            </Button>
>>>>>>> Stashed changes
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
