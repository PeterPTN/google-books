import { BookCard } from '../../components/BookCard/BookCard';
import style from './DisplaySearch.module.scss';
import FilterBtn from '../../components/FilterBtn/FilterBtn';
import Reload from '../../components/Reload/Reload';
import { MainLoadContext } from '../../context/MainLoadProvider';
import { useContext } from 'react';

interface PropTypes {
    onBookClick: (data: any) => void,
    onFilterClick: (id: number) => void,
    books: any[],
    filterTypes: {
        id: number;
        type: string,
        displayTitle: string,
        selected: boolean,
    }[]
};

const DisplaySearch = ({ books, filterTypes, onFilterClick, onBookClick }: PropTypes) => {
    const { mainLoad, setMainLoad } = useContext(MainLoadContext);

    return (
        <div className={style.Wrapper}>
            <div className={style.Wrapper__display}>
                <div className={style.Wrapper__display_header}>
                    <div className={style.Wrapper__display_header_filter}>
                        <h2>Google Books Filters</h2>
                        <div className={style.Wrapper__display_header_filter_btns}>
                            {filterTypes.map((filterType) => (
                                (<FilterBtn page="search" onFilter={onFilterClick} key={filterType.id} filterData={filterType} />)
                            ))}
                        </div>

                    </div>

                </div>

                {mainLoad ?
                    <Reload />
                    :
                    <div className={style.Wrapper__display_cards}>
                        {books.map((book) => {
                            return <BookCard
                                key={book.id}
                                data={book}
                                saleInfo={book.saleInfo}
                                volumeInfo={book.volumeInfo}
                                onBookClick={onBookClick}
                            />
                        })}
                    </div>
                }
            </div>
        </div>
    )
}

export default DisplaySearch