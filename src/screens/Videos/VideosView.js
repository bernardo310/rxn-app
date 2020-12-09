import React, { useState, useCallback } from 'react'
import { ScrollView, Text, ActivityIndicator } from 'react-native'
import VideoCardView from '../../components/core/VideoCard';
import YouTube from 'react-native-youtube';
import YoutubePlayer, { getYoutubeMeta } from "react-native-youtube-iframe";
import COLORS from '../../constants/Colors';
import useVideos from '../../hooks/useVideos';

import Button from '../../components/core/Button';
import styles from './VideosStyles';

const VideosView = (props) => {
    let { loading, data } = useVideos();
    const { isVideoDataLoading, setVideoDataLoading } = useState(true)
    //hardcode por mientras
    if(data.length==0){
        data = [
            { videoId: 'jvtd1p3JUzA', title: 'Cómo hacer shampoo - Taller RXN', thumbnail: 'https://i.ytimg.com/vi/jvtd1p3JUzA/hqdefault.jpg' },
            { videoId: 'EyW-A1Nlv00', title: 'Live cómo hacer Spray Antibacterial en casa - Curso online RXN', thumbnail: 'https://i.ytimg.com/vi/EyW-A1Nlv00/hqdefault.jpg' },
            { videoId: 'bySRi1QPN_A', title: 'Taller RXN - ¿Cómo crear un shampoo sólido?', thumbnail: 'https://i.ytimg.com/vi/bySRi1QPN_A/hqdefault.jpg' },
            { videoId: 'Jhwwznn8G40', title: 'Taller RXN - ¿Cómo crear un acondicionador sólido?', thumbnail: 'https://i.ytimg.com/vi/Jhwwznn8G40/hqdefault.jpg' },
            { videoId: '98dNb3mDxPo', title: 'Taller RXN juntos Nuevo Leon COVID19', thumbnail: 'https://i.ytimg.com/vi/98dNb3mDxPo/hqdefault.jpg' },
            { videoId: '5uulBxtaU3o', title: 'Live de Huertos Urbanos', thumbnail: 'https://i.ytimg.com/vi/5uulBxtaU3o/hqdefault.jpg' },
            { videoId: '2A7eri2YPbY', title: 'Talleres Online RXN 2020', thumbnail: 'https://i.ytimg.com/vi/2A7eri2YPbY/hqdefault.jpg' },
            { videoId: 'Jvz3ZUmL16w', title: '¿Cómo hacer antibacterial en casa? Formula OMS', thumbnail: 'https://i.ytimg.com/vi/Jvz3ZUmL16w/hqdefault.jpg' },
        ]
    }
    const videoClickHandler = (videoId, title) => {
        props.navigation.navigate({
            routeName: 'Video',
            params: {
                videoId: videoId,
                title: title
            }
        })
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>

            {!loading ?
                (
                    data.map(video => (
                        <VideoCardView 
                            key={video.videoId}
                            title={video.title}
                            videoId={video.videoId}
                            thumbnail={video.thumbnail}
                            onPress={() => videoClickHandler(video.videoId, video.title)}
                            />
                    ))
                )
                : (
                    <ActivityIndicator size="large" color={COLORS.accentYellow} />
                )
            }


        </ScrollView>
    )
}

VideosView.navigationOptions = navData => {
    return {
        headerTitle: 'Videos',
    }
}

export default VideosView
