import { useState, useEffect } from 'react'

interface PropTypes {
    query: string,
    API_KEY: string,
    setIsLoading: (arg0: boolean) => void,
    filterTypes: {
        id: number,
        type: string,
        selected: boolean;
    }[]
}

const useGoogleAPIRecall = ({ query, API_KEY, filterTypes, setIsLoading }: PropTypes) => {
    // Change type eventually
    const [data, setData] = useState<any>([]);

    const googleBooksData = async (qry: string, key: string, type: string) => {
        const workingQuery = qry || "CSS In Depth";

        try {
            const response = type ?
                await fetch(`https://www.googleapis.com/books/v1/volumes?q=+${type}:${workingQuery}&key=${key}`) :
                await fetch(`https://www.googleapis.com/books/v1/volumes?q=${workingQuery}&key=${key}`);

            const responseJson = await response.json();
            setIsLoading(false);
            setData(responseJson);
        } catch (error) {
            console.log(error, "Error message");
        }
    }

    useEffect(() => {
        const type = filterTypes.reduce((filter, filterData) => {
            if (filterData.selected && filterData.type !== "contains") filter = `in${filterData.type}`;
            return filter
        }, "");

        googleBooksData(query, API_KEY, type)
    }, [query])

    return {data};
}

export { useGoogleAPIRecall }