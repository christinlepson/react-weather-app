import React, {Component} from 'react';
import Header from './Header';
import WeeklyForecastList from './WeeklyForecastList'
import {Consumer} from './context';

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


                    if (context.locationError) {
                        if (context.locationErrorMessage) {
                            return (<p>
                                Error getting your location, it may not be enabled in your browser.
                                </p>);
                        } else {
                            return (<p>
                                {`Error getting your location: ${context.locationErrorMessage}`}
                                </p>);
                        }
                    } else {
                        console.log("reached logic");
                        context.actions.getForecast();
                        return(
                            context.isLoading ? <p>Loading...</p> :
                            <div className="main-content">
                                <Header/>
                                <WeeklyForecastList/>
                            </div>
                        );
                    }
                } }
            </Consumer>
        )
    }
    
}