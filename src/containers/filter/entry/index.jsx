import React from 'react';
import Checkbox from '../../../components/checkbox';
import styles from './index.module.css';

function FilterEntry ({ checked, label, onCheckChange }) {
    return (
        <div className={styles.container}>
            <Checkbox value={checked} readOnly={true} onChange={onCheckChange}>
                <span>{label}</span>
            </Checkbox>
        </div>
    );
}

export default FilterEntry;