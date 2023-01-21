import { useState } from "react"
import Loader from "../../components/__Loader/Loader";
import Sidesearch from "../../components/_Sidesearch/Sidesearch";
import { useGoogleAPIRecall } from "../../hooks/useGoogleAPISearch"
import styles from './Searchpage.module.scss';
import Displaysearch from "../../components/_Displaysearch/Displaysearch";

interface PropTypes {
  onSearchSubmit: (input: string) => void,
  onUserInput: (e: { target: HTMLInputElement }) => void,
  query: string,
  API_KEY: string,
  userInput: string,
  filterTypes: {
    id: number;
    type: string,
    selected: boolean,
  }[]
}

// Change type eventually
interface ApiData {
  data: any[]
}

const Search = ({ query, API_KEY, filterTypes, onSearchSubmit, userInput, onUserInput }: PropTypes) => {
  const [isLoading, setIsLoading] = useState(true);
  const { data }: ApiData = useGoogleAPIRecall({ query, API_KEY, filterTypes, setIsLoading })


  if (isLoading) return <Loader />
  else return (
    <div className={styles.Search}>
      <Sidesearch onSearchSubmit={onSearchSubmit} userInput={userInput} onUserInput={onUserInput} />
      <Displaysearch books={data} />
    </div>
  )
}

export default Search