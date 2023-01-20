import { Homepage } from './containers/Homepage/Homepage';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Search from './containers/Search/Search';
import { ErrorPage } from './errors/ErrorPage';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const API_KEY = import.meta.env.VITE_API_KEY;

  const handleSubmit = (input: string) => {
    setSearchQuery(input)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage onSearchSubmit={handleSubmit} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/search",
      element: <Search query={searchQuery} API_KEY={API_KEY} />,
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

