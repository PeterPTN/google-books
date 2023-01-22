import Bookcard from '../Bookcard/Bookcard';
import style from './Displaysearch.module.scss';
import FilterBtn from '../FilterBtn/FilterBtn';
import Reload from '../Reload/Reload';

interface PropTypes {
    onBookClick: (data: any) => void,
    onFilterClick: (id: number) => void,
    books: any[],
    reload: boolean,
    filterTypes: {
        id: number;
        type: string,
        displayTitle: string,
        selected: boolean,
    }[]
}

const Displaysearch = ({ books, filterTypes, onFilterClick, onBookClick, reload }: PropTypes) => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Wrapper__display}>
                <h1>Search Results:</h1>

                <div className={style.Wrapper__display_filter}>
                    <h2>Google Books Filter</h2>

                    <div className={style.Wrapper__display_filter_btns}>
                        {filterTypes.map((filterType) => (
                            (<FilterBtn page="search" onFilter={onFilterClick} key={filterType.id} filterData={filterType} />)
                        ))}
                    </div>
                </div>

                {reload ?
                    <Reload />
                    :
                    <div className={style.Wrapper__display_cards}>
                        {books.map((book) => {
                            return <Bookcard
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

export default Displaysearch