import styles from './Homepage.module.scss';

import Rectangle from '../../assets/Rectangles/Rectangle';
import recStyles from '../../assets/Rectangles/Rectangles.module.scss';

import openBook from '../../assets/images/openBook.svg';
import magGlass from '../../assets/images/magGlass.svg';

import About from '../../components/About/About';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterBtn from '../../components/FilterBtn/FilterBtn';


interface PropType {
    onSearchSubmit: (input: string) => void,
    onSelect: (id: number) => void
    filterTypes: {
        id: number;
        type: string,
        selected: boolean,
    }[]
}

export const Homepage = ({ onSearchSubmit, onSelect, filterTypes }: PropType) => {
    const [userInput, setUserInput] = useState("");
    const [displayAbout, setDisplayAbout] = useState(false);
    const AboutBtnStyles = displayAbout ? `${styles.AboutBtn} ${styles.AboutBtnBorder}` : `${styles.AboutBtn}`;
    const navigate = useNavigate();

    const handleAboutClick = () => {
        setDisplayAbout(!displayAbout)
    }

    const handleSearchSubmit = (e: any) => {
        e.preventDefault();
        onSearchSubmit(userInput);
        navigate("/search");
    }

    const handleUserInput = (e: any) => {
        setUserInput(e.target.value);
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
                {filterTypes.map((filterType) => (
                    (<FilterBtn onSelect={onSelect} key={filterType.id} filterData={filterType} />)
                ))}
            </div>

            <form className={styles.Form}>
                <img src={magGlass} onClick={handleSearchSubmit} />
                <input className={styles.Searchbar} id="input" type="text" autoFocus onChange={handleUserInput} />
                <input className={styles.Submit} type="submit" value="Search" onClick={handleSearchSubmit} />
            </form>

            <Rectangle type={`${recStyles.RectangleOne} `} />
            <Rectangle type={`${recStyles.RectangleTwo} `} />
            <Rectangle type={`${recStyles.RectangleThree} `} />
            <Rectangle type={`${recStyles.RectangleFour} `} />
            <Rectangle type={`${recStyles.RectangleFive} `} />
        </main>
    )
}
