import { Homepage } from './pages/Homepage/HomePage';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Search from './pages/Search/SearchPage';
import { ErrorPage } from './errors/ErrorPage';
import { SEARCH_PARAMS } from './data/constants';
import MainLoadProvider from './context/MainLoadProvider';

interface ArrayTypes {
  id: number;
  type: string;
  displayTitle: string,
  selected: boolean;
}

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [paramTypes, setParamTypes] = useState(SEARCH_PARAMS);
  const API_KEY = import.meta.env.VITE_API_KEY;

  const handleSubmit = (input: string) => {
    setSearchQuery(input)
  }

  const handleSearchSelect = (id: number) => {
    setParamTypes(paramTypes.reduce((array: ArrayTypes[], paramType) => {
      id === paramType.id ? paramType.selected = true : paramType.selected = false;
      array.push(paramType);
      return array
    }, []));
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage
        onSearchSubmit={handleSubmit}
        paramTypes={paramTypes}
        onSelect={handleSearchSelect}
      />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/search",
      element: <Search
        paramTypes={paramTypes}
        onSearchSubmit={handleSubmit}
        onSearchSelect={handleSearchSelect}
        query={searchQuery}
        API_KEY={API_KEY} />,
    }
  ])

  return (
    <>
      {/* RouteProvider will push to paths specified */}
      <MainLoadProvider>
        <RouterProvider router={router} />
      </MainLoadProvider>
    </>
  )
}

export default App

