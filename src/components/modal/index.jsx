import React from 'react';
import styles from './index.module.css';

function Modal({ show, children }) {
    const className = show ? `${styles.overlay} ${styles.block}` : `${styles.overlay} ${styles.none}`;

    return (
        <div className={className}>
            <div className={styles.modal}>
                {children}
            </div>
        </div>
    );
}

export default Modal;