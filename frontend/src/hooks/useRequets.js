import {useEffect, useState} from "react";

export default function useRequest(request){
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        request()
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(true));
    }, []);

    return {data, loading, error};
}