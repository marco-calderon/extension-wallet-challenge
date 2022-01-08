import React from 'react';
import { PropTypes } from 'prop-types';
import Category from '../../components/category';
import styles from './index.module.css';

/**
 * Groups categories by a title.
 * 
 * @param {string} props.title - is the title of this categories group
 * @param {Array<Category>} props.categories - is an array of Category objects
 * @returns this component rendered
 */
function Categories ({ title, categories }) {
    const handleOnCategoryClick = (event) => {
        console.log(event);
    } 

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.categories}>
                {categories && categories.map(e => (
                    <Category key={e.id} category={e} onClick={handleOnCategoryClick} />
                ))}
            </div>
        </div>
    );
}

Categories.props = {
    title: PropTypes.string,
    categories: PropTypes.array,
};

Categories.defaultProps = {
    title: 'Title',
    categories: [],
};

export default Categories;