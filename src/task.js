import React, { Component } from 'react';
import './Header.css';

class Task extends Component {
  constructor(props) {
  	super(props);

    this.state = {
      delete: false,
    }

    this.taskClicked = this.taskClicked.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }


componentDidMount() {
}

taskClicked() {
  console.log(this.props.index)
  this.props.toggleTaskFunc(this.props.index);
    console.log('Active: ' + this.props.active)
}

handleDelete() {
  this.props.deleteFunc(this.props.index);
}

deleteState() {
  if (this.props.deleteMode === false) {
     return ( <div className = 'delete-button' onClick = {this.handleDelete}>
      X
      </div>
      )
    }
}

  render() {
    const deleteState = this.props.deleteMode ? (
      <div className = 'delete-button' onClick = {this.handleDelete}>
      X
      </div>
    ) : (<div></div>)
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
      {deleteState}
      </div>
    );
  }
}

export default Task;
