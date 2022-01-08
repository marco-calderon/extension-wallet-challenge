import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './index.module.css';
import searchIcon from '../../svg/searchIcon.svg';
import filterIcon from '../../svg/filterIcon.svg';

function Search ({ onSearch }) {
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
            <button className={styles.searchFilterButton}>
                <img src={filterIcon} className={styles.searchIcon} alt="Filter" />
            </button>
        </div>
    );
}

Search.props = {
    onSearch: PropTypes.func,
    initialSearch: PropTypes.string,
}

Search.defaultProps = {
    onSearch: () => {},
    initialSearch: '',
}

export default Search;