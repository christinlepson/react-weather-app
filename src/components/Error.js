import React from 'react';
import icon from '../icons/error.svg';

const Error = props => {
    return(
        <div className="error">
            <img className="error-icon" src={icon} alt="" />
            <h2>{props.message}</h2>
        </div>
    )
};

export default Error;