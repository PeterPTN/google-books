import { Homepage } from './containers/Homepage/Homepage';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Search from './containers/Search/Search';
import { ErrorPage } from './errors/ErrorPage';
import { SEARCH_FILTERS } from './data/constants';

interface ArrayTypes {
  id: number;
  type: string;
  selected: boolean;
}

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterTypes, setFilterTypes] = useState(SEARCH_FILTERS);
  const API_KEY = import.meta.env.VITE_API_KEY;

  const handleSubmit = (input: string) => {
    setSearchQuery(input)
  }

  const handleSelect = (id: number) => {
    setFilterTypes(filterTypes.reduce((array: ArrayTypes[], filterType) => {
      id === filterType.id ? filterType.selected = true : filterType.selected = false;
      array.push(filterType);
      return array
    }, []));
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage
        onSearchSubmit={handleSubmit}
        filterTypes={filterTypes}
        onSelect={handleSelect}
      />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/search",
      element: <Search
        filterTypes={filterTypes}
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

