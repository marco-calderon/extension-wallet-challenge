import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './index.module.css';
import Button from '../button';
import rightArrowIcon from '../../svg/rightArrowIcon.svg';

function Category ({ category }) {
    return (
        <div className={styles.category} style={{ background: category.background }}>
            <div className={styles.iconContainer}>
                <img className={styles.icon} src={category.icon} style={{ background: category.iconColor }}></img>
            </div>
            <div className={styles.titleContainer}>
                <h3 className={styles.title}></h3>
                <Button>
                    <img className={styles.titleIcon} src={rightArrowIcon}></img>
                </Button>
            </div>
        </div>
    );
}

Category.props = {
    category: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        icon: PropTypes.string,
        iconColor: PropTypes.string,
        background: PropTypes.string,
    }),
}

Category.defaultProps = {
    category: {
        name: '',
        description: '',
        icon: '',
        iconColor: '',
        background: '',
    }
}

export default Category;