import React from 'react'
import { View, Text } from 'react-native'

import Button from '../../components/core/Button'

import styles from './VideosStyles';

const VideosView = (props) => {
    return (
        <View style={styles.container}>
            <Text >Videos Screen</Text>
            <Button onPress={() => {
                props.navigation.navigate({
                    routeName: 'Video',
                    params: {
                        videoId: 'elIdDelVideo'
                    }
                })
            }}>Ver Video 1</Button>


        </View>
    )
}

VideosView.navigationOptions = navData => {
    return {
        headerTitle: 'Videos',
    }
}

export default VideosView
