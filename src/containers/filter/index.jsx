import React from 'react';
import FilterEntry from './entry';

function FilterOptions ({ options, onFilterClick }) {
    return (
        <>
            {options && options.map(o => (
                <FilterEntry key={o.id} checked={o.checked} label={o.label} onCheckChange={() => onFilterClick(o)} />
            ))}
        </>
    );
}

export default FilterOptions;