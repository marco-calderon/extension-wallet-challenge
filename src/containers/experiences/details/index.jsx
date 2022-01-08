import React from 'react';
import styles from './index.module.css';
import urlIcon from '../../../svg/urlIcon.svg';
import arrowUpIcon from '../../../svg/arrowUpIcon.svg';

/**
 * Renders properly the details tab content of an experience.
 * 
 * @param {Object} props - is the props object
 * @param {String} props.title - is the title of this experience
 * @param {String} props.description - is the description
 * @param {String} props.url - is the url 
 * @returns the rendered component.
 */
function DetailsTab ({ title, description, url }) {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>{title}</h3>
                <img src={arrowUpIcon} alt="Url" />
            </div>
            <p className={styles.desc}>{description}</p>
            <span className={styles.url}>
                <img src={urlIcon} alt="Url" />&nbsp;
                {url}
            </span>
        </div>
    );
}

export default DetailsTab;