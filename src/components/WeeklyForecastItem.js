import React, {Component} from 'react';
import Skycons from '../icons/skycons';

export default class WeeklyForecastItem extends Component {

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        const skycons = new Skycons({"color": "white"});
        skycons.add(this.canvasRef.current, this.props.icon);
        skycons.play();
    }

    render() {
        return(
            <div className="weekly-forecast-item">
                <p className="weekly-forecast-date">{this.props.day}</p>
                <canvas id={this.props.day} className="weekly-forecast-icon" ref={this.canvasRef}></canvas>
                <p className="weekly-forecast-temps">
                    <span className="weekly-forecast-min-temp">{parseInt(this.props.lowTemp)}° </span>
                    /
                    <span className="weekly-forecast-max-temp"> {parseInt(this.props.highTemp)}°</span>
                </p>
            </div>
        )
    }
}