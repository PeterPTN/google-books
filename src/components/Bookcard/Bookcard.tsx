import styles from './Bookcard.module.scss'
import notFound from '../../assets/images/notFound.png'
import { useState } from 'react'

interface PropTypes {
    onBookClick: (data: any) => void,
    data: any;
    saleInfo: {
        buyLink: string;
        listPrice: {
            amount: number,
            currencyCode: string
        }
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

const Bookcards = ({ onBookClick, data, saleInfo, volumeInfo }: PropTypes) => {
    const imgSrc = volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : notFound;
    const title = volumeInfo.title ? volumeInfo.title : "Unknown";
    const authors = volumeInfo.authors ? volumeInfo.authors[0] : "Unknown";
    const forSale = saleInfo.listPrice
    ? `${saleInfo.listPrice.amount} ${saleInfo.listPrice.currencyCode}`
    : "Price not listed";
    const buyLink = saleInfo.buyLink ? saleInfo.buyLink : "";
    const priceStyle = buyLink.length > 0 ? [styles.Bookcards__price] : [styles.Noprice];

    const handleClick = () => {
        onBookClick(data);
    }

    return (
        <div className={styles.Bookcards}>
             <figure>
                <img src={imgSrc} alt={title} onClick={handleClick} />
                <p>Preview</p>
            </figure>

            <h2 className='multi-truncate'>{title}</h2>
            <h3 className='truncate'>{authors}</h3>
            <p>{forSale}</p>
            <a className={priceStyle.join(" ")} href={buyLink} target="_blank" rel="norefferer noopener">Buy link</a>
        </div >
    )
}

export default Bookcards