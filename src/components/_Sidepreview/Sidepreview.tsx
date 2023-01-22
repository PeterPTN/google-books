import Form from '../Form/Form';
import Preview from '../Preview/Preview';
import styles from './Sidepreview.module.scss';

interface PropTypes {
    onSearchSubmit: (input: string) => void,
    onUserInput: (e: {target: HTMLInputElement } ) => void,
    userInput: string,
}

const Sidepreview = ({ userInput, onSearchSubmit, onUserInput }: PropTypes) => {

    return (
        <div>
            <Form page="Side" userInput={userInput} onSearchSubmit={onSearchSubmit} onUserInput={onUserInput} />
            <Preview />
        </div>
    )
}

export default Sidepreview