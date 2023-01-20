import { useState } from "react"
import { useGoogleAPIRecall } from "../../hooks/useGoogleAPISearch"

interface PropTypes {
  query: string,
  API_KEY: string
}

// Change type eventually
interface ApiData {
  data: any
}

const Search = ({ query, API_KEY }: PropTypes) => {

  const { data }: ApiData = useGoogleAPIRecall({ query, API_KEY })

  return (
    <div>Search</div>
  )
}

export default Search