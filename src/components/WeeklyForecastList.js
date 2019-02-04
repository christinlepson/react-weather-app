import React from 'react';

import {Consumer} from './context';
import WeeklyForecastItem from './WeeklyForecastItem';
import {Formatter} from '../helpers/Formatter';

const WeeklyForecastList = () => {
    return(
        <Consumer>
            { context => {

                const dailyForecasts = context.forecast.daily.data;

                return(
                    <div className="weekly-forecast-list">
                        { dailyForecasts.slice(1).map( day => (
                            <WeeklyForecastItem
                                key={Formatter.getWeekday(day.time)}
                                day={Formatter.getWeekday(day.time)}
                                highTemp={day.temperatureHigh}
                                lowTemp={day.temperatureLow}
                                icon={day.icon}
                            />
                        ) ) }
                    </div>
                );

            } }
        </Consumer>
    )
};

export default WeeklyForecastList;