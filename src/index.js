import React from 'react';
import ReactDOM from 'react-dom';
import './universal.css'

import SplashScreen from './splashScreen';
import ContactHover from './contact'

const App = () => {
    return (
        <div className='top'>
            <ContactHover/>
            <div>
                <SplashScreen/>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));