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
            enter: false,
            contentVis: 'invis',
            navigating: false
        };
    };

    enterClicked() {
        console.log('we are in here', this);
        this.setState({
            contentVis: 'vis',
            enter: true
        });
        this.forceUpdate();
    }

    navClicked(){
        console.log('We are here, some nav was clicked.');
        this.setState({
            navigating: true
        });
    }

    render(){
        return (
            <div className='top'>
                <ContactHover/>
                <div>
                    <SplashScreen nav={this.state.navigating} enterClicked={this.enterClicked.bind(this)}/>
                    <div className={this.state.contentVis}>
                        <Content enter={this.state.enter} navClicked={this.navClicked.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));