import React from 'react';
import { PropTypes } from 'prop-types';
import Category from '../../components/category';
import styles from './index.module.css';
import rightArrowIcon from '../../svg/rightArrowIcon.svg';

/**
 * Groups categories by a title.
 * 
 * @param {string} props.title - is the title of this categories group
 * @param {Array<Category>} props.categories - is an array of Category objects
 * @param {Boolean} seeAll - indicates whether it should show a See All button
 * @param {Function} onSeeAll - callback that is called when See All button is clicked
 * @returns this component rendered
 */
function Categories ({ title, categories, seeAll, onSeeAll }) {
    const handleOnCategoryClick = (event) => {
        console.log(event);
    } 

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>{title}</h3>
                {seeAll && (
                    <>
                        <div className={styles.separator}></div>
                        <button className={styles.seeAll} >
                            <span className={styles.seeAllLabel}>See All</span>
                            <img src={rightArrowIcon} alt="See All" />
                        </button>
                    </>
                )}
            </div>
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
    seeAll: PropTypes.bool,
    onSeeAll: PropTypes.func,
};

Categories.defaultProps = {
    title: 'Title',
    categories: [],
    seeAll: false,
    onSeeAll: () => {},
};

export default Categories;