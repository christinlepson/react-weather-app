import React from 'react';
import './App.css';

import {Consumer} from './components/context'
import Searchbar from './components/SearchBar';
import Header from './components/Header';
import WeeklyForecastList from './components/WeeklyForecastList';

const App = () => {
    return (
        <Consumer>
            { context => (
                <div className="App">
                    <Searchbar />
                    <Header />
                    <WeeklyForecastList />
                </div>
            ) }
        </Consumer>
    );
}

export default App;
