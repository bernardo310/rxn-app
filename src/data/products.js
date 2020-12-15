import axios from 'axios';

const url = 'https://rxn-api.herokuapp.com';

const getProducts = async () => {
    try {
        const { data: { data } } = await axios.get(`${url}/gateway/products`);
        return data;
    } catch (err) {
        return null
    }

};

export default getProducts;