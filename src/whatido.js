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
                <div className="gridContainer">
                    <div className="grid-item list1">
                        <h3>Langauges</h3>
                        <ul>
                            <List points={['Javascript', 'HTML5', 'CSS3', 'PHP7', 'Python2/3', 'Arduino', 'R', 'Java', 'Apex', 'Assembly']} />
                        </ul>
                    </div>
                    <div className="grid-item list2">
                        <h3>Frameworks and Libraries</h3>
                        <ul>
                            <List points={['React', 'Backbone', 'JSForce', 'JQuery', 'MatPlotLib', 'Pandas', 'BeautifulSoup', 'PyGame', 'TKinter']} />
                        </ul>
                    </div>
                    <div className="grid-item list3">
                        <h3>Tools</h3>
                        <ul>
                            <List points={['VSCode', 'IntelliJ', 'Eclipse', 'Spyder', 'Git', 'RollBar', 'Jira', 'YouTrack']} />
                        </ul>
                    </div>
                    <div className="grid-item list4">
                        <h3>Misc.</h3>
                        <ul>
                            <List points={['Debain Linux', 'Arch Linux', 'Windows', 'SQL', 'Mongo', 'MicroControllers', 'Computer Hardware', 'Server Hardware', 'Networking']} />
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default whatido;