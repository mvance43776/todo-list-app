import React, { Component } from 'react';
import './Header.css';
import TimingTasks from './TimingTasks.js';

class EditContainer extends Component {
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
  }


componentDidMount() {

}

handleAddClick() {
  let taskList = this.state.taskList;
  taskList.daily.push("")
  this.setState({taskList: taskList});
}

deleteTask(index, time) {
  let taskList = this.state.taskList;
  taskList[time].splice(index, 1);
  this.setState({taskList: taskList});
}


  render() {
    return (
      <div id="slides">
        <div className="slide slide0">
          <div className="content">
            <TimingTasks 
              time = "Day"
              tasks = {this.state.taskList.daily}
              handleAddClickFunc = {this.handleAddClick}
              deleteFunc = {this.deleteTask}
              deleteMode = {this.state.deleteMode}
              edit = "true"
            />
            <TimingTasks 
              time = "Week"
              tasks = {this.state.taskList.weekly}
              deleteFunc = {this.deleteTask}
              deleteMode = {this.state.deleteMode}
              edit = "true"
            />
            <TimingTasks 
              time = "Month"
              tasks = {this.state.taskList.monthly}
              deleteFunc = {this.deleteTask}
              deleteMode = {this.state.deleteMode}
              edit = "true"
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

export default EditContainer;
