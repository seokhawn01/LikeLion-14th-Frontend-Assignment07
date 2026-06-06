import { useState,useEffect } from "react";
import instance from "../api/axiosInstance";

export const useFetch = (endPoint) => {
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState(null);
    const [error,setError] = useState(false);
    const [errorMessage,setErrorMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await instance.get(endPoint);
                setData(response.data);
            } catch (e) {
                setError(true);
                setErrorMessage(e.message);
            } finally { // 성공하든 실패하든 마지막에 실행 
                setLoading(false);
            }
        };
        fetchData();
    }, [endPoint]);

    return {loading, data, error, errorMessage}; // 필요할때 컴포넌트에서 사용 가능
}

// useEffect는 async로 만들 수 없다