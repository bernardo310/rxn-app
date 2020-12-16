import React from 'react'
import { View, Text, Linking } from 'react-native'
import Title from '../../components/core/Title'
import Button from '../../components/core/Button'
import YoutubePlayer from "react-native-youtube-iframe";

import styles from './VideoStyles';

const VideoView = (props) => {
    const videoId = props.navigation.getParam('videoId')
    const title = props.navigation.getParam('title')
    // const [playing, setPlaying] = useState(false);

    // const onStateChange = useCallback((state) => {
    //     if (state === "ended") {
    //         setPlaying(true);
    //         Alert.alert("video has finished playing!");
    //     }
    // }, []);
    return (
        <View style={styles.container}>
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
                Ver Canal de YouTube
            </Button>
        </View>
    )
}

VideoView.navigationOptions = navData => {
    return {
        headerTitle: 'Video',
    }
}

export default VideoView
