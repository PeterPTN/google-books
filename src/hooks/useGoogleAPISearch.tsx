import { useState, useEffect } from 'react'

interface PropTypes {
    query: string,
    API_KEY: string
}

const useGoogleAPIRecall = ({ query, API_KEY }: PropTypes) => {
    // Change type eventually
    const [data, setData] = useState<any>([]);
    // Call when new queries made in search page

    const googleBooksData = async (qry: string, key: string) => {
        let test = "man";

        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${test}&key=${API_KEY}`);
            const responseJson = await response.json();

            console.log(responseJson);
        } catch (error) {
            console.log(error, "error");
        }
    }


    useEffect(() => {
        googleBooksData(query, API_KEY)
    }, [query])

    return data;
}

export { useGoogleAPIRecall }