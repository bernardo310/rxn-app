import { useState, useEffect } from 'react';
import getEvents from '../data/events';

export const useEvents = ({startDate, endDate}) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const response = await getEvents({startDate, endDate});
            if (response){
                setData(response);
            }
            setLoading(false);
        };
        fetchData();
    }, [startDate, endDate]);
    return { loading, data };
};

export default useEvents;