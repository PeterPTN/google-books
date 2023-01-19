import { useRouteError } from 'react-router-dom';

interface StoreErrorTypes {
    error: string,
    statusText: string,
}

export const ErrorPage = () => {
    const error = useRouteError();
    let errorMessage;

    if (error && typeof error === "object" && "statusText" in error) {
        errorMessage = `${error.statusText}`;
    }

    return (
        <div>
            <h1>Oops!</h1>
            <p>An unexpected error has occured.</p>
            <p>{errorMessage}</p>
        </div>
    )
}