import React from 'react';
import {Consumer} from './context'

const ErrorMessage = props => {
    return(
        <Consumer>
            { context => (
                <h1>{context.forecast.timezone}</h1>
            ) }
        </Consumer>
    )
};

export default ErrorMessage;