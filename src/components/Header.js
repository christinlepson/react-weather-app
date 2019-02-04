import React from 'react';
import {Consumer} from './context';

import TodaysForecast from './TodaysForecast';

const Header = () => {

    return(
        <Consumer>
            { context => (
                <div className={[context.forecast.currently.icon + "-bg", "header-container"].join(' ')}>
                    <div className="header">
                        <div className="todays-info">
                            <p class={["your-location", "capitalized-info"].join(' ')}>Your location</p>
                            <h1>Walsall, UK</h1>
                            <p class="todays-summary">{context.forecast.hourly.summary}</p>
                        </div>
                        <TodaysForecast currentForecast={context.forecast.currently} />
                    </div>
                </div>
            ) }
        </Consumer>
    )
};

export default Header;