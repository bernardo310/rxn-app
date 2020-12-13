import { useState, useEffect } from 'react';
import getProducts from '../data/products';

export const useProducts = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const response = await getProducts();
            if (response){
                setData(response)
            } else {
                setData([])
            }
            setLoading(false);
        };
        fetchData();

    }, []);
    return [ loading, data ];
};

export default useProducts;