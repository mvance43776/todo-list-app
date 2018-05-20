import React, { Component } from 'react';
import './Header.css';
import DayTasks from './DayTasks.js';

class TasksContainer extends Component {
  constructor(props) {
  	super(props);
    this.state = {
      taskList: {
        daily: [
                "Take out trash", 
                "Dishes", 
                "Water flowers"
               ],
        weekly: [
                 "Shave", 
                 "Cut nails", 
                 
                ], 
        monthly: [
                  "Oil cutting board", 
                  "Check finances", 
                  "Hone knives"
                 ],
      }, 
      deleteMode: false,
    }
    this.handleAddClick = this.handleAddClick.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.toggleDeleteMode = this.toggleDeleteMode.bind(this);
  }


componentDidMount() {

}

handleAddClick() {
  console.log('reached')
  let taskList = this.state.taskList;
  taskList.daily.push("")
  this.setState({taskList: taskList});
}

deleteTask(index, time) {
  let taskList = this.state.taskList;
  taskList[time].splice(index, 1);
  this.setState({taskList: taskList});
}

toggleDeleteMode() {
  let deleteMode = this.state.deleteMode;
  console.log(deleteMode)
  this.setState({deleteMode: !deleteMode, function() {
    console.log(this.state.deleteMode);
  }});
}


  render() {
    return (
      <div id="slides">
        <div className="slide slide0">
          <div className="content">
            <DayTasks 
              time = "Day"
              tasks = {this.state.taskList.daily}
              handleAddClickFunc = {this.handleAddClick}
              deleteFunc = {this.deleteTask}
              deleteModeFunc = {this.toggleDeleteMode}
              deleteMode = {this.state.deleteMode}
            />
            <DayTasks 
              time = "Week"
              tasks = {this.state.taskList.weekly}
              deleteFunc = {this.deleteTask}
            />
            <DayTasks 
              time = "Month"
              tasks = {this.state.taskList.monthly}
              deleteFunc = {this.deleteTask}
            />
          </div>
        </div>
        <div className="slide slide1">
          <p>Trial lots of text</p>
          <input className = "clear-button" type = "button" value = "clear"></input>
        </div>
      </div>
    );
  }
}

export default TasksContainer;
