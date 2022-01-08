import React from 'react';
import styles from './index.module.css';

function Tab ({ title, active, id, onClick }) {
    return (
        <div className={`${styles.tab} ${active ? styles.active : ''}`} onClick={() => onClick(id)}>
            <span className={styles.label}>{title}</span>
        </div>
    );
}

export default Tab;