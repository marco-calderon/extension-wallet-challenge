import React from 'react';
import styles from './index.module.css';
import avatarIcon from '../../svg/avatarIcon.svg';
import downArrowIcon from '../../svg/downArrowIcon.svg';

/**
 * Display a selection of user with a given user selected.
 * 
 * @param {Object} props - is the props
 * @param {Object} user - is the user object that should display
 * @returns the rendered component
 */
function UserDropdown (props) {
    return (
        <div className={styles.dropdown}>
            <img src={avatarIcon} alt="Avatar" />
            <h3 className={styles.name}>Johndoe.near</h3>
            <img src={downArrowIcon} className={styles.dropdownIcon} alt="Change user" />
        </div>
    );
}

export default UserDropdown;