import { useState } from "react"
import Loader from "../../components/__Loader/Loader";
import Sidesearch from "../../components/_Sidepreview/Sidepreview";
import { useGoogleAPIRecall } from "../../hooks/useGoogleAPISearch"
import styles from './Searchpage.module.scss';
import Displaysearch from "../../components/_Displaysearch/Displaysearch";
import { FILTER_TYPE } from "../../data/constants";

interface PropTypes {
  onSearchSubmit: (input: string) => void,
  onUserInput: (e: { target: HTMLInputElement }) => void,
  query: string,
  API_KEY: string,
  userInput: string,
  paramTypes: {
    id: number;
    displayTitle: string,
    type: string,
    selected: boolean,
  }[]
}

// Change type eventually
interface ApiData {
  data: any[]
}

interface ArrayTypes {
  id: number;
  type: string;
  displayTitle: string,
  selected: boolean;
}

const Search = ({ query, API_KEY, paramTypes, onSearchSubmit, userInput, onUserInput }: PropTypes) => {
  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const [extraBookData, setExtraBookData] = useState();
  const [filterTypes, setFilterTypes] = useState(FILTER_TYPE);
  const { data }: ApiData = useGoogleAPIRecall({ query, API_KEY, paramTypes, filterTypes, isLoading, setIsLoading, setReload });

  const handleFilterClick = (id: number) => {
    setFilterTypes(filterTypes.reduce((array: ArrayTypes[], filterType) => {
      id === filterType.id ? filterType.selected = true : filterType.selected = false;
      array.push(filterType);
      setReload(true);
      return array
    }, []))
  }

  // Not sure what to set type to
  // Findout how to set type of a large object
  const handleBookClick = (data: any) => {
    setExtraBookData(data);
  }

  // GET PREVIEW DATA AND PASS IT
  console.log(extraBookData);

  if (isLoading) return <Loader />
  else return (
    <div className={styles.Search}>
      <Sidesearch
        onSearchSubmit={onSearchSubmit}
        userInput={userInput}
        onUserInput={onUserInput}
      />

      <Displaysearch
        reload={reload}
        books={data}
        filterTypes={filterTypes}
        onFilterClick={handleFilterClick}
        onBookClick={handleBookClick}
      />
    </div>
  )
}

export default Search