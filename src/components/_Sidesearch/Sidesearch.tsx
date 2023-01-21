import Form from '../Form/Form';
import styles from './Sidesearch.module.scss';

interface PropTypes {
    onSearchSubmit: (input: string) => void,
    onUserInput: (e: {target: HTMLInputElement } ) => void,
    userInput: string,
}

const Sidesearch = ({ userInput, onSearchSubmit, onUserInput }: PropTypes) => {

    return (
        <div>
            <Form page="Side" userInput={userInput} onSearchSubmit={onSearchSubmit} onUserInput={onUserInput} />
        </div>
    )
}

export default Sidesearch