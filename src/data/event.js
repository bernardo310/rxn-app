import axios from 'axios';

const url = 'https://rxn-api.herokuapp.com';

const getEvent = async ({idEvent}) => {
    const {data:{data}} = await axios.get(`${url}/events/${idEvent}`);
    return data;

};

export default getEvent;