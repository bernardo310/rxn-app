import axios from 'axios';

const url = 'https://rxn-api.herokuapp.com';

const getVideos = async () => {
    try {
        const {data:{data}} = await axios.get(`${url}/gateway/videos`);
        return data;
    } catch (err) {
        return null
    }

};

export default getVideos;