import React from 'react';
import ReactDOM from 'react-dom';
import './universal.css'

import SplashScreen from './splashScreen';
import ContactHover from './contact';
import Content from './content';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            enter: false
        };
        console.log('props in content?', props);
    };

    enterClicked() {
        console.log('we are in here', this.state);
        // this.setState({enter: true});
    }

    render(){
        return (
            <div className='top'>
                <ContactHover/>
                <div>
                    <SplashScreen enterClicked={this.enterClicked}/>
                    <Content enter={this.state.enter}/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));