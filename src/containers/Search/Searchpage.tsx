import { useState } from "react"
import Loader from "../../components/__Loader/Loader";
import Sidepreview from "../../components/_Sidepreview/Sidepreview";
import { useGoogleAPIRecall } from "../../hooks/useGoogleAPISearch"
import styles from './Searchpage.module.scss';
import Displaysearch from "../../components/_Displaysearch/Displaysearch";
import { FILTER_TYPE } from "../../data/constants";

interface PropTypes {
  onSearchSelect: (id: number) => void,
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
// Not sure what to
interface ApiData {
  data: any[]
}

interface ArrayTypes {
  id: number;
  type: string;
  displayTitle: string,
  selected: boolean;
}

const Search = ({ query, API_KEY, paramTypes, onSearchSubmit, onSearchSelect, userInput, onUserInput }: PropTypes) => {
  const [isLoading, setIsLoading] = useState(true);
  const [mainLoad, setMainLoad] = useState(true);
  const [sideLoad, setSideLoad] = useState(false);

  const [filterTypes, setFilterTypes] = useState(FILTER_TYPE);
  const [extraBookData, setExtraBookData] = useState({ id: "initial" });
  const { data }: ApiData = useGoogleAPIRecall({ query, API_KEY, paramTypes, filterTypes, isLoading, setIsLoading, setMainLoad });

  const handleFilterClick = (id: number) => {
    setFilterTypes(filterTypes.reduce((array: ArrayTypes[], filterType) => {
      id === filterType.id ? filterType.selected = true : filterType.selected = false;
      array.push(filterType);
      setMainLoad(true);
      return array
    }, []))
  }

  // Not sure what to set type to
  // Findout how to set type of a large object
  const handleBookClick = (data: any) => {
    if (data.id === extraBookData.id) return;
    setExtraBookData((data));
    setSideLoad(true);
  }

  if (isLoading) return <Loader />
  else return (
    <div className={styles.Search}>
      <Sidepreview
        setMainLoad={setMainLoad}
        paramTypes={paramTypes}
        onSearchSelect={onSearchSelect}
        onSearchSubmit={onSearchSubmit}
        userInput={userInput}
        onUserInput={onUserInput}
        previewData={extraBookData}
        sideLoad={sideLoad}
        setSideLoad={setSideLoad}
      />

      <Displaysearch
        mainLoad={mainLoad}
        books={data}
        filterTypes={filterTypes}
        onFilterClick={handleFilterClick}
        onBookClick={handleBookClick}
      />
    </div>
  )
}

export default Search