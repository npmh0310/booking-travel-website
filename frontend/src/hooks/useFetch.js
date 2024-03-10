import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Khởi tạo loading là true khi bắt đầu fetch

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Failed to fetch'); // Ném lỗi nếu request không thành công
                }

                const result = await response.json();
                setData(result.data);
                setError(null); // Reset lỗi nếu fetch thành công
            } catch (err) {
                setError(err.message); // Xử lý lỗi nếu có
            } finally {
                setLoading(false); // Dừng loading khi fetch hoàn thành (bao gồm cả lỗi)
            }
        };

        fetchData();
    }, [url]);

    return {
        data,
        error,
        loading
    };
};

export default useFetch;