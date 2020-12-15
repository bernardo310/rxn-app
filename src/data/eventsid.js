import axios from 'axios';

const url = 'https://rxn-api.herokuapp.com';

const getEventsId = async () => {
    const {data:{data}} = await axios.get(`${url}/events/all`);

    return data;

};

export default getEventsId;