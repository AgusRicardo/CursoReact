
import React from 'react'
import reactDom from 'react-dom'


export default class name extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: this.props.nombre
        }
    }
    handleName = () =>{
        this.setState({
            name: 'Agustin Ricardo'
        })
    }
    render(){
        return(
            <React.Fragment>
                <button onClick={this.handleName}>Change name</button>
                <h2>{this.state.name}</h2>
            </React.Fragment>
        )
    }
}