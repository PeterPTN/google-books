import { Homepage } from './containers/Homepage/Homepage';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Search from './containers/Search/Searchpage';
import { ErrorPage } from './errors/ErrorPage';
import { SEARCH_PARAMS } from './data/constants';

interface ArrayTypes {
  id: number;
  type: string;
  displayTitle: string,
  selected: boolean;
}

function App() {
  const [userInput, setUserInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [paramTypes, setParamTypes] = useState(SEARCH_PARAMS);
  const API_KEY = import.meta.env.VITE_API_KEY;

  const handleSubmit = (input: string) => {
    setSearchQuery(input)
  }

  // Is it possible to store callback to setParamTypes as utility function?
  // Code is duplicated in Searchpage.tsx
  const handleSearchSelect = (id: number) => {
    setParamTypes(paramTypes.reduce((array: ArrayTypes[], paramType) => {
      id === paramType.id ? paramType.selected = true : paramType.selected = false;
      array.push(paramType);
      return array
    }, []));
  }

  const handleUserInput = (e: { target: HTMLInputElement }) => {
    setUserInput(e.target.value);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage
        onSearchSubmit={handleSubmit}
        paramTypes={paramTypes}
        onSelect={handleSearchSelect}
        onUserInput={handleUserInput}
        userInput={userInput}
      />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/search",
      element: <Search
        paramTypes={paramTypes}
        onSearchSubmit={handleSubmit}
        onSearchSelect={handleSearchSelect}
        onUserInput={handleUserInput}
        userInput={userInput}
        query={searchQuery}
        API_KEY={API_KEY} />,
    }
  ])

  return (
    <>
      {/* RouteProvider will Morph into objects above */}
      <RouterProvider router={router} />
    </>
  )
}

export default App

