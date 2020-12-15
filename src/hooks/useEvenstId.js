import { useState, useEffect } from 'react';
import getEventsId from '../data/eventsid';

export const useEventsId = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const response = await getEventsId();
            if (response){
                setData(response);
            }
            setLoading(false);
        };
        fetchData();
    }, []);
    return { loading, data };
};

export default useEventsId;