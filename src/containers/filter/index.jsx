import React from 'react';
import FilterEntry from './entry';

function FilterOptions ({ options }) {
    return (
        <>
            {options && options.map(o => (
                <FilterEntry checked={o.checked} label={o.label} />
            ))}
        </>
    );
}

export default FilterOptions;