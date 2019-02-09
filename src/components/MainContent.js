import React, {Component} from 'react';
import Header from './Header';
import WeeklyForecastList from './WeeklyForecastList'
import {Consumer} from './context';
import Error from './Error';

export default class MainContent extends Component {

    componentWillMount() {

    }
    
    render() {
        return (
            <Consumer>
                { context => {

                    if (!context.locationAttempt) {
                        context.actions.setLocation();
                    } 

                    console.log(context.locationError);
                    if (context.locationError) {
                        if (context.locationErrorMessage) {
                            return (<Error message={`Error getting your location: ${context.locationErrorMessage}`}/>);
                        } else {
                            return (<Error message="Error getting your location, it may not be enabled in your browser."/>);
                        }
                    } else {

                        if (context.forecastError) {
                            return (<Error message="Error getting forecast, ensure that a valid Dark Sky API key was entered and CORS is enabled."/>);
                        } else {
                            context.actions.getForecast();
                            return(
                                context.isLoading ? <p>Loading...</p> :
                                <div className="main-content">
                                    <Header/>
                                    <WeeklyForecastList/>
                                </div>
                            );
                        }
                    }
                } }
            </Consumer>
        )
    }
    
}