import React from 'react';
import './index.css';

function FilterEntry ({ checked, label }) {
    return (
        <div className="entry-container">
            <label className="container">
                <input type="checkbox" checked={checked}></input>
                <span className="checkmark"></span>
            </label>
            <span>{label}</span>
        </div>
    );
}

export default FilterEntry;