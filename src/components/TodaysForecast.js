import React, {Component} from 'react';
import Skycons from '../icons/skycons';

export default class TodaysForecast extends Component {

    currentTemp = this.props.currentForecast.temperature;
    apparentTemp = this.props.currentForecast.apparentTemperature;

    formattedTemp = parseInt(this.currentTemp);
    formattedApparentTemp = parseInt(this.apparentTemp);
    icon = this.props.currentForecast.icon;

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        const skycons = new Skycons({"color": "white"});
        skycons.add(this.canvasRef.current, this.icon);
        skycons.play();
    }

    render() {
        return(
            <div className="todays-forecast">
                <span className="current-temp">{this.formattedTemp}°</span>
                <div className="current-details-container">
                    <canvas className="current-icon" ref={this.canvasRef}></canvas>
                    <span className="capitalized-info">FEELS LIKE: {this.formattedApparentTemp}°</span>
                </div>
            </div>
        )
    }

}