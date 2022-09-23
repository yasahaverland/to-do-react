import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'

class MyList extends Component {
  render() {
    // map over props here
    const todoItems = this.props.theList.map((item, idx) => {
      return <ListItem key={`task-${idx}`} task={item}/>
    })
    return (
      <>
      <div class="line">.</div>
      <div class="big-div">
        <h1> Things I should stop procrastinating:</h1>
        {/* testing for props */}
        {/* {this.props.theList} */}
        {todoItems}
      </div>
      </>
    )
  }
}


export default MyList
