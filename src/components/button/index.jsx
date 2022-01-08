import React from 'react';
import styles from './index.module.css';

/**
 * This is a common function that should be called for an unstyled and simple button.
 * 
 * It can receive the normal properties of a button.
 * 
 * @param {Object} props - is the props object
 * @returns the rendered component
 */
function Button (props) {
    return (
        <button className={styles.button} {...props}>{props.children}</button>
    );
}

export default Button;