import React, {Component} from 'react';
import axios from 'axios';
import secretKey from '../../secret-keys/SecretKey';

const WeatherContext = new React.createContext();

export class Provider extends Component {

    state = {
        isLoading: true,
        forecast: []
    }

    componentWillMount() {
        this.getForecast('52.5862', '-1.9829');
    }

    getForecast = (latitude, longitude) => {
        const apiKey = secretKey.darkSky;
        const url = `https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}?units=si`;
        axios.get(url)
        .then( response => {
            this.setState({isLoading: false, forecast: response.data});
        } )
        .catch( error => console.log(error) );
    }

    render() {
        return (
            <WeatherContext.Provider value={this.state}>
                {this.state.isLoading ? <p>Loading...</p> : this.props.children}
            </WeatherContext.Provider>
        );
    }
}

export const Consumer = WeatherContext.Consumer;