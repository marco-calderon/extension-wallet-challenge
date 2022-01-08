import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './index.module.css';
import Button from '../button';
import rightArrowIcon from '../../svg/rightArrowIcon.svg';

/**
 * Displays a Category data for a Categories group.
 * 
 * @param {Object} props - is the props object
 * @param {Object} category - is a Category object to display data from
 * @returns the rendered component
 */
function Category ({ category }) {
    return (
        <div className={styles.category} style={{ background: category.background }}>
            <div className={styles.iconContainer}>
                <div className={styles.icon} style={{ background: category.iconColor }}>
                    <span className="iconify" data-icon={category.icon} style={{ color: '#fff' }}></span>
                </div>
            </div>
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>{category.name}</h3>
                <Button style={{ padding: 0 }}>
                    <img className={styles.titleIcon} src={rightArrowIcon} alt="Go to Category details"></img>
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