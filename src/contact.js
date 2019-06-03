import React from 'react'
import ReactDOM from 'react-dom'
import anime from 'animejs'

class contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: false,
            name: 'contactsButton',
            text: 'Contact Me'
        }
    }

    animation() {
        //I'm a complete idiot, and I hate myself
        let nums = [1,2,3,4,5]
        console.log(this.state.active)
        if(this.state.active == false){
            let i = -40
            nums.map(function(num){
            console.log('run animation')
                let animation = anime({
                    targets: '.Square'+num,
                    keyframes: [
                    {translateY: i},
                    ],
                    duration: 4000,
                    easing: 'easeOutElastic(1, .8)',
                    loop: false
                });
                i -= 40
                animation.play();
            });
        } else {
            console.log('closing animation!')
            // nums = [5,4,3,2,1]
            let i = 40
            nums.map(function(num){
            console.log('run animation')
                let animation = anime({
                    targets: '.Square'+num,
                    keyframes: [
                    {translateY: 40},
                    ],
                    duration: 4000,
                    easing: 'easeOutElastic(1, .8)',
                    loop: false
                });
                // i += 40
                animation.play();
            });
        }
        console.log('animation done')
    }

    buttonClick(){
        console.log('button clicked!')
        if(this.state.active == false){
            this.setState({
                active: true,
                name: 'contactsButtonClicked',
                text: 'Close'
            });
            this.animation()
        } else {
            this.setState({
                active: false,
                name: 'contactsButton',
                text: 'Contact Me'
            })
            this.animation()

        }
    }
    
    render () {

        return(
            <div className='contactsContainer'>
                <div className='Square Square1'></div>
                <div className='Square Square2'></div>
                <div className='Square Square3'></div>
                <div className='Square Square4'></div>
                <div className='Square Square5'></div>
                <button 
                className={this.state.name}
                onClick={this.buttonClick.bind(this)}>
                    {this.state.text}
                </button>
            </div>
        )
    }
}

export default contact;
