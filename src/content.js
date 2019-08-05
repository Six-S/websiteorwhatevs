import React from 'react';
import anime from 'animejs';
import { BrowserRouter, Route, Link } from "react-router-dom";

class content extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            // text: {
            //     aboutMe: 'About Me',
            //     projects: 'Projects',
            // }
        };
    };

    render() {
        return (
            <div className='navbar'>
                <div className='navBarText who' style={{'marginLeft': '0px'}}>Who I am</div>
                <div className='navBarText what'>What I do</div>
                <div className='navBarText projects'>Projects</div>
            </div>
        )
    }
}

export default content;