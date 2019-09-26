import React from 'react';

class projects extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            visability: 'none'
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                visibility: 'contents'
            });
        }, 2000);
    }

    render(){
        return(
            <div style={{width: '50%', display: this.state.visability}} className="topContent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Nulla pharetra diam sit amet nisl suscipit. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a.
                Sit amet consectetur adipiscing elit pellentesque habitant.
                Facilisis mauris sit amet massa vitae. Sit amet cursus sit amet dictum sit amet justo donec.
            </div>
        )
    }
}

export default projects;