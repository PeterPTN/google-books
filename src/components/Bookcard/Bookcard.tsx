import styles from './Bookcard.module.scss'
import notFound from '../../assets/images/notFound.png'

interface PropTypes {
    saleInfo: {
        title: string
    },
    volumeInfo: {
        title: string
        authors: string[]
        imageLinks: {
            smallThumbnail: string
            thumbnail: string
        }
    }
}

const Bookcards = ({ saleInfo, volumeInfo }: PropTypes) => {
    console.log("SaleInfo", saleInfo) 
    console.log("VolumeInfo", volumeInfo)

    const imgSrc = volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : notFound;
    const title = volumeInfo.title;
    const authors = volumeInfo.authors.join(" ")


    return (
        <div className={styles.Bookcards}>
            <h2 className='multi-truncate'>{title}</h2>
            <h3 className='truncate'>{authors}</h3>
            <img src={imgSrc} alt={title} />
        </div>
    )
}

export default Bookcards