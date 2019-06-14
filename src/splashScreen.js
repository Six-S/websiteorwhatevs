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
        let nums = [0, 1, 2]
        let transY = [-250, 0, 250]
        nums.map(function(num){
            let animation = anime({
                targets: '.line'+num,
                translateY: transY[num],
                width: '80vw',
                easing: 'easeInOutSine'
            });
            animation.play()
        });
    }

    render() {
        return (
            <div className="content" style={{textAlign: 'center'}}>
                <div className='line line0'></div>
                <div className='line line1'></div>
                <div className='line line2'></div>
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

