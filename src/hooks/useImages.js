import { useState, useEffect } from 'react';
import getImages from '../data/images';

export const useImages = (idEvent) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const response = await getImages({idEvent});
            if (response){
                setData(response);
            }
            setLoading(false);
        };
        fetchData();
    }, [idEvent]);
    return { loading, data };
};

export default useImages;