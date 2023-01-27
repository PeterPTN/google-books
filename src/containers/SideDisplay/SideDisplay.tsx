import Form from '../../components/Form/Form';
import Preview from '../../components/Preview/Preview';
import styles from './SideDisplay.module.scss';
import FilterBtn from '../../components/FilterBtn/FilterBtn';
import Google from '../../assets/images/google.png'
import { Link } from 'react-router-dom';

interface PropTypes {
    onSearchSelect: (id: number) => void,
    setSideLoad: (arg0: boolean) => void;
    onSearchSubmit: (input: string) => void,
    setMainLoad: (arg0: boolean) => void,
    sideLoad: boolean,
    previewData: null | any,
    paramTypes: {
        id: number;
        displayTitle: string;
        type: string;
        selected: boolean;
    }[]
}

const SideDisplay = ({ setMainLoad, previewData, paramTypes, onSearchSubmit, onSearchSelect, sideLoad, setSideLoad }: PropTypes) => {
    return (
        <div className={styles.SideDisplay}>
            <div className={styles.SideDisplay__header}>
                <div className={styles.SideDisplay__header_search}>
                    <Link to="/">[K]een</Link>
                    <img src={Google} />
                </div>

                <Form setMainLoad={setMainLoad} page="Side" onSearchSubmit={onSearchSubmit} />
                <div className={styles.SideDisplay__header_filter}>
                    {
                        paramTypes.map((filterType) => (
                            (<FilterBtn page="search" onFilter={onSearchSelect} key={filterType.id} filterData={filterType} />)
                        ))
                    }
                </div>
            </div>
            {
                previewData.id !== "initial"
                    ?
                    <Preview sideLoad={sideLoad} setSideLoad={setSideLoad} previewData={previewData} />
                    :
                    <>
                        <div className={styles.SideDisplay__pending}>
                            <div />
                            <div />
                        </div>
                    </>
            }
        </div>
    )
}

export default SideDisplay