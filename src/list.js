import React from 'react';

class List extends React.Component{
    constructor(props){
        super(props)
        this.state  = {
            listItems: props.points
        }
        console.log(this.state.listItems, '?>?????????????????????????????')
    }

    render(){
        let rows = []
        this.state.listItems.map(function(item){
            rows.push(<li>{item}</li>)
        })
        return(rows)
    }
}

export default List;