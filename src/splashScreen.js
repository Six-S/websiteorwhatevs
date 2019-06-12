import React from 'react';
import ReactDOM from 'react-dom';
import anime from 'animejs';

class splashscreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            labelState: 'label'
        }
    }

    enterClicked(){
        console.log('enter was clicked....');
        this.setState({labelState: 'labelClicked'})
        let animation = anime({
            targets: '.lineOne',
            translateY: -250,
            width: '100%',
            easing: 'easeInOutSine'
        });
        animation.play()
    }

    render() {
        return (
            <div className="content" style={{textAlign: 'center'}}>
                <div className='line lineOne'></div>
                <div className='line lineTwo'></div>
                <div className='line lineThree'></div>
                <label
                className={this.state.labelState}
                onClick={this.enterClicked.bind(this)}>
                    Enter
                </label>
            </div>
        )
    }
}

export default splashscreen;

