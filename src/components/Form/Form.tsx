import styles from './Form.module.scss';
import magGlass from "../../assets/images/magGlass.svg";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface PropTypes {
    onSearchSubmit: (input: string) => void,
    onUserInput: (e: { target: HTMLInputElement }) => void,
    setMainLoad?: (arg0: boolean) => void,
    userInput: string,
    page: string
}

const Form = ({ page, userInput, onSearchSubmit, onUserInput, setMainLoad }: PropTypes) => {
    const [showPrompt, setShowPrompt] = useState(false);
    const navigate = useNavigate();
    const formStyles = page === "Home"
        ? [styles.Form, styles.Homepage]
        : [styles.Form, styles.Sidesearch];


    const handleSearchSubmit = (e: any) => {
        e.preventDefault();
        if (userInput.length === 0) {
            setShowPrompt(true);
            return;
        }

        onSearchSubmit(userInput);
        navigate("/search");
        if (setMainLoad) setMainLoad(true);
    }

    const handleUserInput = (e: { target: HTMLInputElement }) => {
        if (showPrompt) setShowPrompt(false);
        onUserInput(e); 
    }

    return (
        <form className={formStyles.join(" ")}>
            <img src={magGlass} onClick={handleSearchSubmit} />
            <input id="input" type="text" autoFocus onChange={handleUserInput} />
            <input type="submit" value="Search" onClick={handleSearchSubmit} />
            {showPrompt && <p>Your input is required</p>}
        </form>
    )
}

export default Form