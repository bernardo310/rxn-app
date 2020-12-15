import axios from 'axios';

const url = 'https://rxn-api.herokuapp.com';

const getImages = async ({idEvent}) => {
    let link="";
    if(idEvent!==undefined){
        link=`?idEvent=${idEvent}`
    }
    const {data:{data}} = await axios.get(`${url}/events/images${link}`)
    return data;

};

export default getImages;