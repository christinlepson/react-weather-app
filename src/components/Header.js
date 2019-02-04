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
                            <p className="todays-summary">{context.forecast.hourly.summary}</p>
                        </div>
                        <TodaysForecast currentForecast={context.forecast.currently} />
                    </div>
                </div>
            ) }
        </Consumer>
    )
};

export default Header;