import React from 'react';
import './index.css';

function Checkbox (props) {
    return (
        <label className="container" onClick={props.onChange} style={props.style}>{props.children}
            <input type="checkbox" checked={props.value} onChange={props.onCheckChange}></input>
            <span className="checkmark"></span>
        </label>
    );
}

export default Checkbox;