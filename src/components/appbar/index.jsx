import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './index.module.css';
import backIcon from '../../svg/backIcon.svg';
import homeIcon from '../../svg/homeIcon.svg';
import notificationsIcon from '../../svg/notificationsIcon.svg';
import settingsIcon from '../../svg/settingsIcon.svg';
import UserDropdown from '../user-dropdown';
import { useNavigate } from 'react-router-dom';

/**
 * Displays the app bar for the application.
 * 
 * @param {Object} props - is the props object
 * @param {Boolean} props.back - indicates whether a back button should be displayed
 * @param {Boolean} props.home - indicates whether a home button should be displayed
 * @returns the rendered component
 */
export const Appbar = ({ back, home }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.appbar}>
            {back && (
                <button type="button" className={styles.button} onClick={() => navigate(-1)}>
                    <img src={backIcon} className={styles.icon} alt="Back"/>
                </button>
            )}
            {home && (
                <button type="button" className={styles.button}>
                    <img src={homeIcon} className={styles.icon} alt="Home" />
                </button>
            )}
            <UserDropdown src="" name="" />
            <button type="button" className={styles.button}>
                <img src={notificationsIcon} className={styles.icon} alt="Notifications" />
            </button>
            <button type="button" className={styles.button}>
                <img src={settingsIcon} className={styles.icon} alt="Settings" />
            </button>
        </div>
    );
}

Appbar.propTypes = {
    back: PropTypes.bool,
    home: PropTypes.bool,
}

Appbar.defaultProps = {
    back: true,
    home: true,
}