import React from 'react';
import ReactDOM from 'react-dom';

import SplashScreen from './splashScreen';

const App = () => {
    return (
            <div>
                <SplashScreen/>
            </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));