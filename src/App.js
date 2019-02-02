import React, { Component } from 'react';
import './App.css';
import  SearchBar from './components/SearchBar';
import Header from './components/Header';
import WeeklyForecastList from './components/WeeklyForecastList';
import {secretKey} from './components/SecretKey';

class App extends Component {

    fetchForecast = query => {
        
    }

    render() {
    return (
        <div className="App">
        <SearchBar/>
        <Header/>
        <WeeklyForecastList/>
        </div>
    );

  }


}

export default App;
