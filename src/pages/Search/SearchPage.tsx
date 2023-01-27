import { useState, useContext } from "react"
import Loader from "../../containers/Loader/Loader";
import SideDisplay from "../../containers/SideDisplay/SideDisplay";
import { useGoogleAPIRecall } from "../../hooks/useGoogleAPISearch"
import styles from './SearchPage.module.scss';
import DisplaySearch from "../../containers/DisplaySearch/DisplaySearch";
import { FILTER_TYPE } from "../../data/constants";
import { MainLoadContext } from "../../context/MainLoadProvider";

interface PropTypes {
  onSearchSelect: (id: number) => void,
  onSearchSubmit: (input: string) => void,
  query: string,
  API_KEY: string,
  paramTypes: {
    id: number;
    displayTitle: string,
    type: string,
    selected: boolean,
  }[]
}

// Change type eventually
interface ApiData {
  data: any[],
  error: boolean
}

interface ArrayTypes {
  id: number;
  type: string;
  displayTitle: string,
  selected: boolean;
}

const Search = ({ query, API_KEY, paramTypes, onSearchSubmit, onSearchSelect, }: PropTypes) => {
  const { setMainLoad } = useContext(MainLoadContext);
  const [isLoading, setIsLoading] = useState(true);
  const [sideLoad, setSideLoad] = useState(false);

  const [filterTypes, setFilterTypes] = useState(FILTER_TYPE);
  const [extraBookData, setExtraBookData] = useState({ id: "initial" });
  const { data, error }: ApiData = useGoogleAPIRecall({ query, API_KEY, paramTypes, filterTypes, isLoading, setIsLoading, setMainLoad });

  const handleFilterClick = (id: number) => {
    setMainLoad(true);
    setFilterTypes(filterTypes.reduce((array: ArrayTypes[], filterType) => {
      id === filterType.id ? filterType.selected = true : filterType.selected = false;
      array.push(filterType);
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
      <SideDisplay
        setMainLoad={setMainLoad}
        paramTypes={paramTypes}
        onSearchSelect={onSearchSelect}
        onSearchSubmit={onSearchSubmit}
        previewData={extraBookData}
        sideLoad={sideLoad}
        setSideLoad={setSideLoad}
      />

      <DisplaySearch
        error={error}
        books={data}
        filterTypes={filterTypes}
        onFilterClick={handleFilterClick}
        onBookClick={handleBookClick}
      />
    </div>
  )
}

export default Search