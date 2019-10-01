import React from 'react';

class whoiam extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div style={{width: '50%'}} className="topContent">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Nulla pharetra diam sit amet nisl suscipit. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a.
                    Sit amet consectetur adipiscing elit pellentesque habitant.
                    Facilisis mauris sit amet massa vitae. Sit amet cursus sit amet dictum sit amet justo donec.
                </div>
                <div className="gridContainer">
                    <div className="grid-item list1">
                        <p>Software</p>
                    </div>
                    <div className="grid-item list2">
                        <p>Hardware</p>
                    </div>
                    <div className="grid-item list3">
                        <p>Networking</p>
                    </div>
                    <div className="grid-item list4">
                        <p>Robotics</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default whoiam;