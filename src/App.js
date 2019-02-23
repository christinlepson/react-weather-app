import React from 'react';
import './App.css';

import {Consumer} from './components/context';
import Header from './components/Header';
import WeeklyForecastList from './components/WeeklyForecastList'
import ErrorMsg from './components/ErrorMsg';
const App = () => {

    return (
        <Consumer>
                { context => {

                    if (!context.locationAttempt) {
                        context.actions.setLocation();
                    } 

                    if (context.locationError) {
                        if (context.locationErrorMessage) {
                            return (<ErrorMsg message={`Error getting your location: ${context.locationErrorMessage}`}/>);
                        } else {
                            return (<ErrorMsg message="Error getting your location, it may not be enabled in your browser."/>);
                        }
                    }
                    // if there was no error getting location
                    else {

                        if(context.latitude && context.longitude) {

                            if (context.forecastAttempt) {

                                if (context.forecastError) {
                                    return (<ErrorMsg message="Error getting forecast, unable to retrieve data from API."/>);
                                }
                                // if there was no error getting forecast
                                else {
                                    
                                    return(
                                        context.isLoading ? <p>Loading...</p> :
                                        <div className="main-content">
                                            <Header/>
                                            <WeeklyForecastList/>
                                        </div>
                                    );
                                }
    
                            } 
                            // if there was no attempt to get forecast
                            else {
                                context.actions.getForecast();
                            }

                        }


                    }
                } }
            </Consumer>
    );
}

export default App;
