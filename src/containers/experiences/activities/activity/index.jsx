import React from 'react';
import styles from './index.module.css';
import Avatar from '../../../../components/avatar';

/**
 * Shows an activity.
 * 
 * @param {Object} props - is the props object
 * @param {String} props.avatar - is the url of the user avatar
 * @param {String} props.user - is the username
 * @param {String} props.description - is the description of the activity
 * @param {Number} props.timestamp - is the timestamp of this activity
 * @returns the rendered component
 */
function Activity({ avatar, user, description, timestamp }) {
    return (
        <div className={styles.container}>
            <Avatar />
            <div>
                <p className={styles.descriptionContainer}>
                    <span className={styles.user}>{user}</span>
                    {description}
                </p>
                <span className={styles.timestamp}>{timestamp}</span>
            </div>
        </div>
    );
}

export default Activity;