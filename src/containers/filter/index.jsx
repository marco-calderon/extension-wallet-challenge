import React from 'react';
import FilterEntry from './entry';
import styles from './index.module.css';
import Avatar from '../../components/avatar';

function FilterOptions ({ options, onFilterClick }) {
    return (
        <div className={styles.container}>
            {options && options.map(o => {
                if (o.id === 'all') {
                    return <FilterEntry key={o.id} checked={o.checked} label={o.label} onCheckChange={() => onFilterClick(o)} />
                }

                return (
                    <FilterEntry
                        key={o.id}
                        checked={o.checked}
                        label={
                            <div className={styles.labelContainer}>
                                <div className={styles.categoryIcon} style={{ background: o.category && o.category.iconColor }}>
                                    <span className="iconify" data-icon={o.category && o.category.icon} style={{ color: '#fff' }}></span>
                                </div>
                                <span>{o.category.name}</span>
                            </div>
                        }
                        onCheckChange={() => onFilterClick(o)}
                    />
                );
            })}
        </div>
    );
}

export default FilterOptions;