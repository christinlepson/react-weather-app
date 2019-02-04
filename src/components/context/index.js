import React, {Component} from 'react';
import axios from 'axios';

const WeatherContext = new React.createContext();

export class Provider extends Component {

    state = {
        isLoading: true,
        apiKey: '',
        forecast: [],
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
        this.getForecast(this.state.latitude, this.state.longitude);
    }

    getPositionError = error => {
        this.setState({
            locationAttempt: true,
            locationError: true,
            locationErrorMessage: error.message
        })
    }

    getForecast = () => {
        const url = `https://api.darksky.net/forecast/${this.state.apiKey}/${this.state.latitude},${this.state.longitude}?units=si`;
        axios.get(url)
        .then( response => {
            this.setState({isLoading: false, forecast: response.data});
        } )
        .catch( error => console.log(error) );
    }

    render() {
        return (
            <WeatherContext.Provider value={{
                isLoading: this.state.isLoading,
                forecast: this.state.forecast,
                apiKey: this.state.apiKey,
                locationAttempt: this.state.locationAttempt,
                locationError: this.locationError,
                locationErrorMessage: this.locationErrorMessage,
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