import React, { Component } from 'react'
import './App.css'

class ListItem extends Component {
    render() {

        return(
            <div>
                <li key={this.props.key}>{this.props.task}</li>
                
            </div>

        )
    }
}

export default ListItem