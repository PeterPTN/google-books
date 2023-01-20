import recStyles from '../../assets/Rectangles/Rectangles.module.scss';

interface Props {
    type: string;
};

const Rectangle = ({ type }: Props) => {
    return (
        <div className={`${recStyles.Rectangle} ${type}`}></div>
    )
}

export default Rectangle