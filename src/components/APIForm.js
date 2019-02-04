import React, {Component} from 'react';
import {Consumer} from './context';

export default class APIForm extends Component {

    apiinputRef = React.createRef();

    render() {
        return(
            <Consumer>
                { context => {

                    const handleFormSubmit = (e) => {
                        e.preventDefault();
                        const apiInput = this.apiinputRef.current.value;
                        context.actions.setAPIKey(apiInput);
                    }

                    return(
                        <div className="api-form-container">
                            <p>Enter in your Dark Sky API key below</p>
                            <form onSubmit={handleFormSubmit}>
                                <input ref={this.apiinputRef} type="search" placeholder="Enter API key..." />
                            </form>
                        </div>
                    );
                } }
            </Consumer>
        )
    }

}