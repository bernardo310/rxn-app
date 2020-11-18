import { useState, useEffect } from 'react';
import getEvent from '../data/event';

export const useEvent = ({ idEvent }) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const response = await getEvent({ idEvent });
            if (response){
                setData(response);
            }
            setLoading(false);
        };
        fetchData();
    }, [idEvent]);
    return { loading, data };
};

export default useEvent;