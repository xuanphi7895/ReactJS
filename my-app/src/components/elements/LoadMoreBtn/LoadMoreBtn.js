import React from 'react';
import './LoadMoreBtn.css';

const LoadMoreBtn = (props) => {
    debugger
    return (
        <div className="rmdb-loadmorebtn" onClick={props.onClick}>
            <p>{props.text}</p>
        </div>
    )
}

export default LoadMoreBtn;