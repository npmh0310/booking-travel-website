import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(url)

                if (!res.ok) {
                    setError('failed to fetch')
                    console.log('failed to fetch')
                }
                const result = await res.json()
                setData(result.data)
            } catch (err) {
                setError(err.message)
            }
        }
        fetchData()
    }, [url])

    return {
        data,
        error,
        loading
    }
}

export default useFetch;