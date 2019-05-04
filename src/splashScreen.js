import React from 'react';
import ReactDOM from 'react-dom';

const SplashScreen = () => {
    return (
        <div style={{padding: '70px 0', border: '3px solid green', textAlign: 'center'}}>
            <label className="label">
                Welcome
            </label>
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                Enter
            </button>
        </div>
    )
}

export default SplashScreen;