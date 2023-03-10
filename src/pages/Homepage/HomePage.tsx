import styles from './HomePage.module.scss';
import Rectangle from '../../assets/Rectangles/Rectangle';
import recStyles from '../../assets/Rectangles/Rectangles.module.scss';
import openBook from '../../assets/images/openBook.svg';
import About from '../../components/About/About';
import { useState } from 'react';
import FilterBtn from '../../components/FilterBtn/FilterBtn';
import Form from '../../components/Form/Form';

interface PropType {
    onSearchSubmit: (input: string) => void,
    onSelect: (id: number) => void,
    paramTypes: {
        id: number;
        type: string,
        displayTitle: string,
        selected: boolean,
    }[]
}

export const Homepage = ({ onSearchSubmit, onSelect, paramTypes }: PropType) => {
    const [displayAbout, setDisplayAbout] = useState(false);
    const AboutBtnStyles = displayAbout ? `${styles.AboutBtn} ${styles.AboutBtnBorder}` : `${styles.AboutBtn}`;

    const handleAboutClick = () => {
        setDisplayAbout(!displayAbout)
    }

    return (
        <main className={styles.Container}>
            <div className={styles.About}>
                <button onClick={handleAboutClick} className={AboutBtnStyles}>about</button>
                <About canDisplay={displayAbout} />
            </div>

            <header className={styles.Header}>
                <h1>[k]een</h1>
                <label htmlFor="input">With over 40+ million titles to search from</label>
                <img src={openBook} alt="open book" />
            </header>

            <div className={styles.Filter}>
                <h2>Filter by:</h2>
                {paramTypes.map((filterType) => (
                    (<FilterBtn page="home" onFilter={onSelect} key={filterType.id} filterData={filterType} />)
                ))}
            </div>

            <Form page="Home" onSearchSubmit={onSearchSubmit} />

            <h3>&copy; 2023 <a rel="noopener noreferrer" href="https://pptn-portfolio.netlify.app">Peter Nguyen</a></h3>

            <Rectangle type={`${recStyles.RectangleOne} `} />
            <Rectangle type={`${recStyles.RectangleTwo} `} />
            <Rectangle type={`${recStyles.RectangleThree} `} />
            <Rectangle type={`${recStyles.RectangleFour} `} />
            <Rectangle type={`${recStyles.RectangleFive} `} />
        </main>
    )
}
