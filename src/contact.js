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

    buttonClick(){
        console.log('button clicked!')
        if(this.state.active == false){
            this.setState({
                active: true,
                name: 'contactsButtonClicked',
                text: 'Close'
            });
        } else {
            this.setState({
                active: false,
                name: 'contactsButton',
                text: 'Contact Me'
            })
        }
    }
    
    render () {
        return(
            <div className='contactsContainer'>
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
