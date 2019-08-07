import React from 'react';
import anime from 'animejs';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import WhoIAm from './whoiam'
import WhatIDo from './whatido'
import Projects from './projects'


class content extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            navclass: 'navbar'
            // text: {
            //     aboutMe: 'About Me',
            //     projects: 'Projects',
            // }
        };
    };

    render() {
        return (
            <div className='navbar'>
                <Router>
                    <div>
                        <Link className='navBarText who' style={{'marginLeft': '0px'}} to="/">Who I am</Link>
                        <Link className='navBarText what' to="/whatido">What I do</Link>
                        <Link className='navBarText projects' to="/projects">What I've Done</Link>

                        <Route exact path="/" component={WhoIAm} />
                        <Route path="/whatido" component={WhatIDo} />
                        <Route path="/projects" component={Projects} />
                    </div>
                </Router>
            </div>
        )
    }
}

export default content;