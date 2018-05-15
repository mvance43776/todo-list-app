import React, { Component } from 'react';
import './Header.css';

class Task extends Component {
  constructor(props) {
  	super(props);


    this.taskClicked = this.taskClicked.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

handleDelete() {
  this.props.deleteFunc(this.props.index);
}

  render() {
    return (
      <div>
      <p
        onDoubleClick = {this.removal} 
        className = {this.props.active ? 'strikethrough' : ''}
        id = {'p-day' + (this.props.index + 1)}
        index = {this.props.index}
        onDoubleClick = {() => this.taskClicked(this)}
      >
        {this.props.task}
      </p>
      <div className = 'delete-button' onClick = {this.handleDelete}>
      X
      </div>
      </div>
    );
  }
}

export default Task;
