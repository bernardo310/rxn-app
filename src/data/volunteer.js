import axios from 'axios';

const url = 'https://rxn-api.herokuapp.com';

const postVolunteer = async (body) => {
    try{
        const {status} = await axios.post(`${url}/events/volunteer`, body);
        return status;
    }
    catch{
        return 428;
    }
};

export default postVolunteer;