import React, { Component } from 'react';
import './task.css';

class Task extends Component {
  constructor(props) {
  	super(props);


    this.taskClicked = this.taskClicked.bind(this);
  }


componentDidMount() {
}

removal() {
console.log('removal')
}

taskClicked() {
  console.log(this.props.index)
  this.props.toggleTaskFunc(this.props.index);
    console.log('Active: ' + this.props.active)
}


  render() {
    return (
      <div>
      <p
        onDoubleClick = {this.removal} 
        className = {this.props.active ? 'strikethrough ingredient' : 'ingredient'}
        index = {this.props.index}
        onDoubleClick = {() => this.taskClicked(this)}
      >
        {this.props.task}
      </p>
      </div>
    );
  }
}

export default Task;
