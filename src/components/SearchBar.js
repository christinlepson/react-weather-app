import React, {Component} from 'react';
import {Consumer} from './context';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.searcInput = React.createContext();
    }

    render() {
        return(
            <Consumer>
                { context => {

                    const handleSubmit = e => {
                        e.preventDefault();
                    }

                    return(
                        <div className="searchbar-container">
                            <form onSubmit={handleSubmit}>
                                <input ref={this.searcInput} type="search" placeholder="Enter a location..." />
                            </form>
                        </div>
                    );
                } }
            </Consumer>
        )
    }
}