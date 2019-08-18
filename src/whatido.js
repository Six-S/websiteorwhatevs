import React from 'react';
import List from './list'

class whatido extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div className="topContent">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Nulla pharetra diam sit amet nisl suscipit. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a.
                    Sit amet consectetur adipiscing elit pellentesque habitant.
                    Facilisis mauris sit amet massa vitae. Sit amet cursus sit amet dictum sit amet justo donec.
                </div>
                <div className="list1">
                    <h3>Langauges</h3>
                    <ul>
                        <List points={['Javascript', 'HTML5', 'CSS3', 'PHP7', 'SQL', 'Python', 'Arduino', 'BASH', 'Java', 'Apex']} />
                    </ul>
                </div>
            </div>
        )
    }
}

export default whatido;