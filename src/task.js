import React, { Component } from 'react';
import './Header.css';

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
      <p
        onDoubleClick = {this.removal} 
        className = {this.props.active ? 'strikethrough' : ''}
        id = {'p-day' + (this.props.index + 1)}
        index = {this.props.index}
        onDoubleClick = {() => this.taskClicked(this)}
      >
        {this.props.task}
      </p>
    );
  }
}

export default Task;
