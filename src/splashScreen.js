import React from 'react';
import anime from 'animejs';

class splashscreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            labelState: 'label'
        }
        console.log('props?', props)
    }

    enterClicked() {
        console.log('enter was clicked....');
        this.setState({ labelState: 'labelClicked' });
        this.props.enterClicked();
        let nums = [0, 1, 2]
        let transY = [-250, 0, 250]
        nums.map(function (num) {
            let animation = anime.timeline({
                easing: 'linear',
                duration: 2000
            });
            animation.add({
                targets: '.line' + num,
                translateY: transY[num],
                duration: 1000,
            });
            animation.add({
                targets: '.line' + num,
                duration: 1000,
                width: '80vw',
            },1000);
            animation.play();
        });
    }

    render() {
        return (
            <div className="content" style={{ textAlign: 'center' }}>
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

