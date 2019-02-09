import React, {Component} from 'react';
import axios from 'axios';

const WeatherContext = new React.createContext();

export class Provider extends Component {

    state = {
        isLoading: true,
        apiKey: '',
        forecast: [],
        forecastAttempt: false,
        forecastError: false,
        locationAttempt: false,
        locationError: false,
        locationErrorMessage: '',
        latitude: '',
        longitude: ''
    }

    componentWillMount() {
        this.setLocation();
    }

    setAPIKey = (apiKey) => {
        this.setState({apiKey});
    }

    setLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getPositionSuccess, this.getPositionError);
          } else {
              this.setState({locationAttempt: true, locationError: true});
          }
    }

    getPositionSuccess = position => {
        this.setState({
            locationAttempt: true,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    }

    getPositionError = error => {
        this.setState({
            locationAttempt: true,
            locationError: true,
            locationErrorMessage: error.message
        })
    }

    getForecast = () => {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const url = `https://api.darksky.net/forecast/${this.state.apiKey}/${this.state.latitude},${this.state.longitude}`;
        console.log(proxy + url);
        axios.get(proxy + url)
        .then( response => {
            this.setState({isLoading: false, forecast: response.data, forecastAttempt: true});
        } )
        .catch( error => {
            console.log(error)
            this.setState({isLoading: false, forecastError: true, forecastAttempt: true});
        } );
    }

    render() {
        return (
            <WeatherContext.Provider value={{
                isLoading: this.state.isLoading,
                forecast: this.state.forecast,
                forecastAttempt: this.state.forecastAttempt,
                forecastError: this.state.forecastError,
                apiKey: this.state.apiKey,
                locationAttempt: this.state.locationAttempt,
                locationError: this.state.locationError,
                locationErrorMessage: this.state.locationErrorMessage,
                actions: {
                    setAPIKey: this.setAPIKey,
                    setLocation: this.setLocation,
                    getForecast: this.getForecast
                }}}>

                {this.props.children}
            </WeatherContext.Provider>
        );
    }
}

export const Consumer = WeatherContext.Consumer;