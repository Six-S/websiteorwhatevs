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
        const transY = this.calculateTranslateY();

        this.nums.map(function (num) {
            const animation = anime.timeline({
                easing: 'easeOutExpo',
                duration: 2000
            });
            animation.add({
                targets: '.line' + num,
                translateY: transY[num],
                duration: 500,
            });
            animation.add({
                targets: '.line' + num,
                duration: 500,
                width: '80vw',
            }, 500);
            animation.play();
        });
    }

    handleWindowResize() {
        const transY = this.calculateTranslateY();

        this.nums.map(function (num) {
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
        });
    }

    handleAnimation(options) {

        //set defaults if options aren't passed in
        const {
            timelineDuration = 2000,
            translateYDuration = 500,
            widthDuration = 500,
            transY = this.calculateTranslateY()
        } = options;

        this.nums.map(function (num) {
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
                width: '80vw',
            }, 500);
            animation.play();
        });
    }

    calculateTranslateY(){
        const viewportHeight = window.innerHeight;
        return this.nums.map((num) => {
            if (num === 0) return -viewportHeight * 0.4;  // 10vh from top
            if (num === 1) return -viewportHeight * 0.3;  // 50vh (center)
            if (num === 2) return viewportHeight * 0.5;  // 90vh near bottom
        });
    }

    navClicked(){
        if(this.state.labelState == 'labelClicked'){
            const numsClose = this.nums.reverse();

            numsClose.map((num) => {
                const animation = anime.timeline({
                    easing: 'easeOutExpo',
                    duration: 1500
                });
                animation.add({
                    targets: '.line' + num,
                    duration: 500,
                    width: '100px',
                });
                animation.add({
                    targets: '.line' + num,
                    translateY: 0,
                    duration: 1000,
                }, 1000);
                animation.play();
            });
            setTimeout(() => {
                const transY = [-250, 0, 250];

                this.nums.map((num) => {
                    const animation = anime.timeline({
                        easing: 'easeOutExpo',
                        duration: 1500
                    });
                    animation.add({
                        targets: '.line' + num,
                        translateY: transY[num],
                        duration: 1000,
                    });
                    animation.add({
                        targets: '.line' + num,
                        duration: 500,
                        width: '80vw',
                    },1000);
                    animation.play();
                });
            }, 2000);
        } else {
            console.log('label has not been clicked.');
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

