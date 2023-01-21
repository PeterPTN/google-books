import { useState } from "react"
import { useGoogleAPIRecall } from "../../hooks/useGoogleAPISearch"

interface PropTypes {
  query: string,
  API_KEY: string,
  filterTypes: {
    id: number;
    type: string,
    selected: boolean,
  }[]
}

// Change type eventually
interface ApiData {
  data: {
    items: any[]
  }
}

const Search = ({ query, API_KEY, filterTypes }: PropTypes) => {
  const [isLoading, setIsLoading] = useState(true);
  const { data }: ApiData = useGoogleAPIRecall({ query, API_KEY, filterTypes, setIsLoading })

  console.log(data.items);

  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  } else {
    return (
      <div>Search</div>
    )
  }
}

export default Search