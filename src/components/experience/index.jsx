import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './index.module.css';
import rightArrowIcon from '../../svg/rightArrowIcon.svg';
import Button from '../button';

/**
 * Displays an Experience in an Experiences group.
 * 
 * @param {Object} experience - is an Experience object
 * @param {Function} onClick - a function that should be called when an experience object has been clicked.
 * @returns the rendered component
 */
function Experience ({ experience, onClick }) {
    return (
        <div className={styles.experience} onClick={(event) => onClick(experience, event)}>
            <div className={styles.iconContainer} style={{ background: `${experience.color}` }}>
                
            </div>
            <div className={styles.details}>
                <h3 className={styles.detailsTitle}>{experience.name}</h3>
                <p className={styles.detailsDesc}>{experience.description}</p>
                <span className={styles.detailsUsers}>{experience.users}</span>
            </div>
            <Button>
                <img src={rightArrowIcon} alt="Go to Experience details" />
            </Button>
        </div>
    );
}

Experience.props = {
    experience: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        icon: PropTypes.string,
        color: PropTypes.string,
        users: PropTypes.string,
    }),
}

Experience.defaultProps = {
    experience: {
        name: '',
        description: '',
        icon: '',
        color: '',
        users: '',
    }
}

export default Experience;