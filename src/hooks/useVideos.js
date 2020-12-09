import { useState, useEffect } from 'react';
import getVideos from '../data/videos';
import { getYoutubeMeta } from "react-native-youtube-iframe";

export const useVideos = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const getVideoDetails = async (videoId) => {
        const meta = await getYoutubeMeta(videoId);
        return { videoId: videoId, title: meta.title, thumbnail: meta.thumbnail_url }
    }

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const response = await getVideos();
            if (response){
                let vidArr = [];
                for(let video of response) {
                    vidArr.push(await getVideoDetails(video.id.videoId)) 
                }
                setData(vidArr);
            } else {
                setData([])
            }
            setLoading(false);
        };
        fetchData();

    }, []);
    return { loading, data };
};

export default useVideos;