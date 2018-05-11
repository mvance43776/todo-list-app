import React, { Component } from 'react';
import './TasksContainer.css';
import DayTasks from './DayTasks.js';
import WeekTasks from './WeekTasks.js';
import MonthTasks from './MonthTasks.js';

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
      }
    }
  }


componentDidMount() {

}


  render() {
    return (
      <div id="slides">
        <div className="slide slide0">
          <div className="content">
            <DayTasks tasks = {this.state.taskList.daily}/>
            <WeekTasks tasks = {this.state.taskList.weekly}/>
            <MonthTasks tasks = {this.state.taskList.monthly}/>
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
