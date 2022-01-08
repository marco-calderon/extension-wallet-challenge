import React from 'react';
import avatarIcon from '../../svg/avatarIcon.svg';

/**
 * Shows an avatar for a given user.
 * 
 * @param {Object} props - is the props object
 * @returns the rendered component
 */
function Avatar (props) {
    return (
        <img src={avatarIcon} alt="Avatar" />
    );
}

export default Avatar;