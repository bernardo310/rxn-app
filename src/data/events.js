import axios from 'axios';

const url = 'https://rxn-api.herokuapp.com';

const getEvents = async ({startDate, endDate}) => {
    const {data:{data}} = await axios.get(`${url}/events/?startDate=${startDate}&endDate=${endDate}`);

    return data;

};

export default getEvents;