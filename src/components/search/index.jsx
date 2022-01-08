import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './index.module.css';
import searchIcon from '../../svg/searchIcon.svg';
import filterIcon from '../../svg/filterIcon.svg';

/**
 * Displays a search that usually will be appearing for filtering experiences
 * 
 * @param {Object} props - is the props objects
 * @param {Function} props.onSearch - function that will be called on search trigger
 * @param {Function} props.onFilterClick - function that will be called on filter click
 * @param {String} props.initialSearch - the initial term if any
 * @returns the rendered component  
 */
function Search ({ onSearch, onFilterClick }) {
    const handleOnTextChange = (event) => {
        console.log(event);
        onSearch(event);
    }

    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <img src={searchIcon} className={styles.searchIcon} alt="Search" />
                <input type="text" className={styles.searchInput} onChange={handleOnTextChange} placeholder="Search experiences"></input>
            </div>
            <button className={styles.searchFilterButton} onClick={onFilterClick}>
                <img src={filterIcon} className={styles.searchIcon} alt="Filter" />
            </button>
        </div>
    );
}

Search.props = {
    onSearch: PropTypes.func,
    initialSearch: PropTypes.string,
    onFilterClick: PropTypes.func,
}

Search.defaultProps = {
    onSearch: () => {},
    initialSearch: '',
    onFilterClick: () => {},
}

export default Search;