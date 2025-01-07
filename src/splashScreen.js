import React from 'react';
import anime from 'animejs';

class splashscreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            labelState: 'label'
        }
        this.nums = [0, 1, 2];
        console.log('props?', props)
    }

    componentDidUpdate(){
        if(this.props.nav){
            console.log('hello we are navigating');
            this.navClicked();
        } else {
            console.log('uh oh we are not navigating.');
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowResize.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize.bind(this));
    }

    enterClicked() {
        this.setState({ labelState: 'labelClicked' });
        this.props.enterClicked();
        this.handleAnimation();
    }

    handleWindowResize() {
        const transY = this.calculateTranslateY();

        this.nums.map((num) => {
            const animation = anime.timeline({
                easing: 'easeOutExpo',
                duration: 2000
            });
            animation.add({
                targets: '.line' + num,
                translateY: transY[num],
                duration: 500,
            });
            animation.play();
            return true;
        });
    }

    handleAnimation(options={}) {

        //set defaults if options aren't passed in
        const {
            timelineDuration = 2000,
            translateYDuration = 500,
            widthDuration = 500,
            width = '80vw',
            transY = this.calculateTranslateY(),
            nums = this.nums,
            closing = false
        } = options;

        //If this is a "closing" animation, we need
        //to reverse the order of the animation.
        if(closing){
            nums.map((num) => {
                const animation = anime.timeline({
                    easing: 'easeOutExpo',
                    duration: timelineDuration
                });
                animation.add({
                    targets: '.line' + num,
                    duration: widthDuration,
                    width: width,
                }, 500);
                animation.add({
                    targets: '.line' + num,
                    translateY: transY[num],
                    duration: translateYDuration,
                });
                animation.play();
                return true;
            });
        } else {
            nums.map((num) => {
                const animation = anime.timeline({
                    easing: 'easeOutExpo',
                    duration: timelineDuration
                });
                animation.add({
                    targets: '.line' + num,
                    translateY: transY[num],
                    duration: translateYDuration,
                });
                animation.add({
                    targets: '.line' + num,
                    duration: widthDuration,
                    width: width,
                }, 500);
                animation.play();
                return true;
            });
        }
    }

    calculateTranslateY(){
        const viewportHeight = window.innerHeight;
        return this.nums.map((num) => {
            if (num === 0) return -viewportHeight * 0.4;  // 10vh from top
            if (num === 1) return -viewportHeight * 0.3;  // 50vh (center)
            if (num === 2) return viewportHeight * 0.5;  // 90vh near bottom
            return 0;
        });
    }

    navClicked(){
        if(this.state.labelState === 'labelClicked'){

            this.handleAnimation({
                timelineDuration: 1500,
                translateYDuration: 1000,
                nums: this.nums.reverse(),
                transY: [0, 0, 0],
                width: '100px',
                closing: true
            });

            setTimeout(() => {
                this.handleAnimation({
                    timelineDuration: 1500,
                    translateYDuration: 1500,
                    widthDuration: 500
                });
            }, 2000);
    }
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

