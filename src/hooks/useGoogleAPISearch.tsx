import { useState, useEffect } from 'react';
import { findSelectedFilter, findSelectedParam, getLatency } from '../services/util-funcs';

interface PropTypes {
    query: string,
    API_KEY: string,
    isLoading: boolean,
    setIsLoading: (arg0: boolean) => void,
    setMainLoad: (arg0: boolean) => void,
    paramTypes: {
        id: number,
        type: string,
        displayTitle: string,
        selected: boolean;
    }[],
    filterTypes: {
        id: number,
        displayTitle: string,
        type: string,
        selected: boolean;
    }[]
}

const useGoogleAPIRecall = ({ isLoading, query, API_KEY, paramTypes, filterTypes, setIsLoading, setMainLoad }: PropTypes) => {
    // Change type eventually
    const [data, setData] = useState<any>([]);
    const [error, setError] = useState(false);

    const googleBooksData = async (isLoading: boolean, qry: string, key: string, paramType: string, filterType: string) => {
        const workingQuery = qry || "CSS In Depth";

        try {
            let url = `https://www.googleapis.com/books/v1/volumes?q=+${paramType}:${workingQuery}&key=${key}&maxResults=20`;
            if (filterType) url = url.concat(`&filter=${filterType}`);

            const response = await fetch(url);
            if (!response.ok) throw new Error("Could not fetch data")
            const responseJson = await response.json();
            const totalItems = responseJson.totalItems;
            const latency = getLatency(totalItems);
            
            if (totalItems > 0) {
                setData(responseJson.items);
                setTimeout(() => setMainLoad(false), latency)
            }
            else {
                setTimeout(() => setMainLoad(false), latency)
                setTimeout(() => setError(true), latency)
            }
        } catch (error) {
            // console.log(error, "Error message");
            setError(true);
        } finally {
            if (isLoading) setTimeout(() => setIsLoading(false), 1000);
        }
    }

    useEffect(() => {
        if (error) setError(false);
        const paramType = findSelectedParam(paramTypes);
        const filterType = findSelectedFilter(filterTypes);

        googleBooksData(isLoading, query, API_KEY, paramType, filterType)
    }, [query, filterTypes, paramTypes])

    return { data, error };
}

export { useGoogleAPIRecall }