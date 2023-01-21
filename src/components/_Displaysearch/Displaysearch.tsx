import Bookcard from '../Bookcard/Bookcard';
import style from './Displaysearch.module.scss';

interface PropTypes {
    books: any[]
}

const Displaysearch = ({ books }: PropTypes) => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Wrapper__display}>
                <h1>Search Results:</h1>
                <div className={style.Wrapper__display_cards}>
                    {books.map((book) => {
                        return <Bookcard saleInfo={book.saleInfo} volumeInfo={book.volumeInfo} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Displaysearch