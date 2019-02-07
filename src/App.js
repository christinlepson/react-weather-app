import React from 'react';
import './App.css';

import {Consumer} from './components/context'
import MainContent from './components/MainContent'
import APIForm from './components/APIForm';

const App = () => {

    return (
        <Consumer>
            { context => (
                <div className="App">
                    {context.apiKey ?
                        <MainContent/>
                        :
                        <APIForm/> }
                </div>
            ) }
        </Consumer>
    );
}

export default App;
