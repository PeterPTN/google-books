import { useState, createContext } from 'react';

interface ComponentProps {
    children: React.ReactNode,
}

interface ContextType {
    mainLoad: boolean,
    setMainLoad: React.Dispatch<React.SetStateAction<boolean>>
}

const initialContext = {
    mainLoad: false,
    setMainLoad: () => {}
}

export const MainLoadContext = createContext<ContextType>(initialContext);

const MainLoadProvider = ({ children }: ComponentProps) => {
    const [mainLoad, setMainLoad] = useState(false);

    const data = {mainLoad, setMainLoad};

    return (
        <MainLoadContext.Provider value={data} >{children}</MainLoadContext.Provider>
    )
}

export default MainLoadProvider