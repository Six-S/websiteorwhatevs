import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import WhoIAm from './whoiam'
import WhatIDo from './whatido'
import Projects from './projects'


class content extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            navclass: 'navbar'
        };
    };

    render() {
        return (
            <div className='headerContainer'>
                <div className='header'>
                    <b>
                        Brennan Link
                    </b>
                </div>
                <div className='navbar'>
                    <Router>
                        <div>
                            <Link onClick={this.props.navClicked} className='navBarText who' style={{'marginLeft': '0px'}} to="/">Who I am</Link>
                            <Link onClick={this.props.navClicked} className='navBarText what' to="/whatido">What I do</Link>
                            <Link onClick={this.props.navClicked} className='navBarText projects' to="/projects">What I've Done</Link>

                            <Route exact path="/" component={WhoIAm} />
                            <Route path="/whatido" component={WhatIDo} />
                            <Route path="/projects" component={Projects} />
                        </div>
                    </Router>
                </div>
            </div>
        )
    }
}

export default content;