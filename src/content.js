import React from 'react';
import anime from 'animejs';

class content extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            nothin: null
        };
    };

    render() {
        return (
            <div>
                <label className='welcome contentText'>About Me</label>
            </div>
        )
    }
}

export default content;