import styles from './FilterBtn.module.scss';
import React from 'react';

interface PropTypes {
    page: string,
    onFilter: (id: number) => void,
    filterData: {
        id: number;
        type: string;
        displayTitle: string;
        selected: boolean;
    }
}

const FilterBtn = ({ page, onFilter, filterData }: PropTypes) => {
    const id = filterData.id;

    // Is there a better way to do this dynamically?
    const btnStyles = page === "home"
        ? [styles.Homebutton]
        : [styles.Searchbutton];

    if (filterData.selected && page === "home") btnStyles.push(styles.Homeselected)
    if (filterData.selected && page === "search") btnStyles.push(styles.Searchselected)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        onFilter(id);
    }

    return (
        <button onClick={handleClick} className={btnStyles.join(" ")}>{filterData.displayTitle}</button>
    )
}

export default FilterBtn