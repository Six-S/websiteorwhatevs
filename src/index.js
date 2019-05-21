import React from 'react';
import ReactDOM from 'react-dom';
import './universal.css'

import SplashScreen from './splashScreen';

const App = () => {
    return (
        <div className='top'>
            <div>
                <SplashScreen/>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));