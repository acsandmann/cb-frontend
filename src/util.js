import { useState, useEffect } from 'react';

export function useFetch(uri) {
    const location = new URL(uri)
    const url = window.location.href.includes('localhost') ? `http://localhost:6969/${location.pathname+location.search}` : `http://154.53.38.83:6969/${location.pathname+location.search}`;

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setData(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);  // Dependency on URL means this will re-run only if URL changes

    return { data, loading, error };
};