import { BookCard } from '../../components/BookCard/BookCard' 
import style from './DisplaySearch.module.scss';
import FilterBtn from '../../components/FilterBtn/FilterBtn';
import Reload from '../../components/Reload/Reload';

interface PropTypes {
    onBookClick: (data: any) => void,
    onFilterClick: (id: number) => void,
    books: any[],
    mainLoad: boolean,
    filterTypes: {
        id: number;
        type: string,
        displayTitle: string,
        selected: boolean,
    }[]
};

const DisplaySearch = ({ books, filterTypes, onFilterClick, onBookClick, mainLoad }: PropTypes) => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Wrapper__display}>
                <h1>Search Results:</h1>

                <div className={style.Wrapper__display_filter}>
                    <h2>Google Books Filters</h2>

                    <div className={style.Wrapper__display_filter_btns}>
                        {filterTypes.map((filterType) => (
                            (<FilterBtn page="search" onFilter={onFilterClick} key={filterType.id} filterData={filterType} />)
                        ))}
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