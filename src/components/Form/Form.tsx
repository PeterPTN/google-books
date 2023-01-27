import styles from './Form.module.scss';
import magGlass from "../../assets/images/magGlass.svg";
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';

interface PropTypes {
    onSearchSubmit: (input: string) => void,
    setMainLoad?: (arg0: boolean) => void,
    page: string
}

const Form = ({ page, onSearchSubmit, setMainLoad }: PropTypes) => {
    const [showPrompt, setShowPrompt] = useState(false);
    const input = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const formStyles = page === "Home"
        ? [styles.Form, styles.Homepage]
        : [styles.Form, styles.Sidesearch];

    const handleSearchSubmit = (e: any) => {
        e.preventDefault();

        if (input.current === null) {
            return
        } else {
            if (input.current.value.length <= 0) {
                setShowPrompt(true);
                return;
            };

            if (showPrompt) setShowPrompt(false);
            onSearchSubmit(input.current.value);
            navigate("/search");
            if (setMainLoad) setMainLoad(true);
        }
    }

    return (
        <form className={formStyles.join(" ")}>
            <img src={magGlass} onClick={handleSearchSubmit} />
            <input ref={input} id="input" type="text" autoFocus />
            <input type="submit" value="Search" onClick={handleSearchSubmit} />
            {showPrompt && <p>Your input is required</p>}
        </form>
    )
}

export default Form