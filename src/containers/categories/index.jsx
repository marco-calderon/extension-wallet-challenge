import React from 'react';
import { PropTypes } from 'prop-types';
import Category from '../../components/category';
import styles from './index.module.css';

function Categories (props) {
    const handleOnCategoryClick = (event) => {
        console.log(event);
    } 

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{props.title}</h3>
            <div className={styles.categories}>
                {props.categories && props.categories.map(e => (
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