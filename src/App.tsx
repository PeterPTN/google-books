import { Homepage } from './containers/Homepage/Homepage';
import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  // Call custom hook for data search

  const handleSubmit = (input: string) => {
    setSearchQuery(input)
  }

  return (
    <>
      <Homepage onSearchSubmit={handleSubmit} />
    </>
  )
}

export default App

