import axios from 'axios'; // Import axios with a lowercase 'a'
import { useEffect, useState } from 'react';

axios.defaults.baseURL = "https://opentdb.com/";

const useAxios = ({ url }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null); // Initialize error state as null
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => { // Use async/await for better error handling
            try {
                const res = await axios.get(url);
                setResponse(res.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);
        return { response, error, loading };
}

export default useAxios;