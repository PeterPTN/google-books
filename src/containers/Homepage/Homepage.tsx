import styles from './Homepage.module.scss';
import Rectangle from '../../assets/Rectangles/Rectangle';
import recStyles from '../../assets/Rectangles/Rectangles.module.scss';
import openBook from '../../assets/images/openBook.svg';
import magGlass from '../../assets/images/magGlass.svg';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

interface PropType {
    onSearchSubmit: (input: string) => void;
}

export const Homepage = ({ onSearchSubmit }: PropType) => {
    const [userInput, setUserInput] = useState("");
    const navigate = useNavigate();

    // Add modal of some kind for about
    const handleAboutClick = () => {
        console.log("do things");
    }

    const handleSearchSubmit = (e: any) => {
        e.preventDefault();
        onSearchSubmit(userInput);
        navigate("/search")
        // Move url to searchPage
    }

    const handleUserInput = (e: any) => {
        setUserInput(e.target.value);
    }


    return (
        <main className={styles.Container}>

            <button onClick={handleAboutClick} className={styles.About}>about</button>

            <header className={styles.Header}>
                <h1>[k]een</h1>
                <label htmlFor="input">Search for authors and book titles</label>
                <img src={openBook} alt="open book" />
            </header>

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
