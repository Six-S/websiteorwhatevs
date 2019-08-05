import React from 'react'
import anime from 'animejs'
import 'font-awesome/css/font-awesome.min.css';

class contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: false,
            name: 'contactsButton',
            text: 'Contact Me',
            gotoLink: {
                reddit: 'https://www.reddit.com/user/FreshRepresentative',
                stack: 'duckduckgo.com',
                email: 'mailto:name@email.com',
                github: 'https://github.com/Six-S'
            }
        }
    }

    animation() {
        //I'm a complete idiot, and I hate myself
        let nums = [1,2,3,4,5]
        if(this.state.active === false){
            let i = -40
            nums.map(function(num){
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
            nums.map(function(num){
                let animation = anime({
                    targets: '.Square'+num,
                    keyframes: [
                        {translateY: 0},
                    ],
                    duration: 4000,
                    easing: 'easeOutElastic(1, .8)',
                    loop: false
                });
                animation.play();
            });
        }
    }

    buttonClick(){
        if(this.state.active === false){
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

    linkClick(goto){
        console.log(goto, '!!!!!!!!!!!!!');
        if (goto){
            Object.keys(this.state.gotoLink).forEach((link) => {
                if(goto == link){
                    console.log(this.state.gotoLink[link]);
                }
            })
        }
    }
    
    render () {

        return(
            <div className='contactsContainer'>
                <div className='Square Square1'></div>
                <i onClick={this.linkClick('email')} className='Square Square2 fa fa-at' style={{fontSize: '30px'}}></i>
                <i onClick={this.linkClick('stack')} className='Square Square3 fa fa-stack-overflow' style={{fontSize: '30px'}}></i>
                <i onClick={this.linkClick('reddit')} className='Square Square4 fa fa-reddit' style={{fontSize: '30px'}}></i>
                <i onClick={this.linkClick('github')} className='Square Square5 fa fa-github-square' style={{fontSize: '35px'}}></i>
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
