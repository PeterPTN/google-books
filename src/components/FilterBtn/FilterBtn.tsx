import styles from './FilterBtn.module.scss';
import React from 'react';

interface PropTypes {
    onSelect: (id: number) => void,
    filterData: {
        id: number,
        type: string,
        selected: boolean;
    }
}

const FilterBtn = ({ onSelect, filterData }: PropTypes) => {
    const btnStyles = [styles.Button];
    const id = filterData.id;
    if (filterData.selected) btnStyles.push(styles.Selected);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        onSelect(id);
    }

    return (
        <button onClick={handleClick} className={btnStyles.join(" ")}>{filterData.type}</button>
    )
}

export default FilterBtn