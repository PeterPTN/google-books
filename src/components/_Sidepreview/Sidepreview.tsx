import Form from '../Form/Form';
import Preview from '../Preview/Preview';
import styles from './Sidepreview.module.scss';
import FilterBtn from '../FilterBtn/FilterBtn';
import Google from '../../assets/images/Google.png'
import { Link } from 'react-router-dom';

interface PropTypes {
    onSearchSelect: (id: number) => void,
    setSideLoad: (arg0: boolean) => void;
    onSearchSubmit: (input: string) => void,
    onUserInput: (e: { target: HTMLInputElement }) => void,
    setMainLoad: (arg0: boolean) => void,
    sideLoad: boolean,
    userInput: string,
    previewData: null | any,
    paramTypes: {
        id: number;
        displayTitle: string;
        type: string;
        selected: boolean;
    }[]
}

const Sidepreview = ({ setMainLoad, previewData, userInput, paramTypes, onSearchSubmit, onSearchSelect, onUserInput, sideLoad, setSideLoad }: PropTypes) => {
    return (
        <div className={styles.Sidepreview}>
            <div className={styles.Sidepreview__header}>
                <div className={styles.Sidepreview__header_search}>
                    <Link to="/">[K]een</Link>
                    <img src={Google} />
                </div>

                <Form setMainLoad={setMainLoad} page="Side" userInput={userInput} onSearchSubmit={onSearchSubmit} onUserInput={onUserInput} />
                <div className={styles.Sidepreview__header_filter}>
                    {
                        paramTypes.map((filterType) => (
                            (<FilterBtn page="search" onFilter={onSearchSelect} key={filterType.id} filterData={filterType} />)
                        ))
                    }
                </div>
            </div>
            {
                previewData.id !== "initial" &&
                <Preview sideLoad={sideLoad} setSideLoad={setSideLoad} previewData={previewData} />
            }
        </div>
    )
}

export default Sidepreview