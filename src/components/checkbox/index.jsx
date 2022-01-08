import React from 'react';
import './index.css';

function Checkbox (props) {
    return (
        <label className="container" onClick={props.onChange}>
            <input type="checkbox" onChange={props.onChange} {...props}></input>
            <span className="checkmark"></span>
        </label>
    );
}

export default Checkbox;