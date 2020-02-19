import React, { Component } from "react";
import "./Header.css";
import TimingTasks from "./TimingTasks.js";

class TasksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasksLoaded: false
    };
    this.handleAddClick = this.handleAddClick.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.toggleDeleteMode = this.toggleDeleteMode.bind(this);
  }
  componentDidMount() {
    let dailyTasks = this.props.taskList.filter(
      task => task.timing === "daily"
    );
    let weeklyTasks = this.props.taskList.filter(
      task => task.timing === "weekly"
    );
    let monthlyTasks = this.props.taskList.filter(
      task => task.timing === "monthly"
    );
    this.setState({
      dailyTasks,
      weeklyTasks,
      monthlyTasks,
      tasksLoaded: true
    });
  }
  handleAddClick() {
    console.log("reached");
    let taskList = this.state.taskList;
    taskList.daily.push("");
    this.setState({ taskList: taskList });
  }

  deleteTask(index, time) {
    let taskList = this.state.taskList;
    taskList[time].splice(index, 1);
    this.setState({ taskList: taskList });
  }

  toggleDeleteMode() {
    let deleteMode = this.state.deleteMode;
    console.log(deleteMode);
    this.setState({
      deleteMode: !deleteMode,
      function() {
        console.log(this.state.deleteMode);
      }
    });
  }
  render() {
    console.log(this.props.taskList);
    if (!this.state.tasksLoaded) return "Loading tasks...";
    return (
      <div id="slides">
        <div className="slide slide0">
          <div className="content">
            <TimingTasks
              time="Day"
              tasks={this.state.dailyTasks}
              edit={this.props.page}
              handleAddClickFunc={this.handleAddClick}
              deleteFunc={this.deleteTask}
              deleteModeFunc={this.toggleDeleteMode}
              deleteMode={this.state.deleteMode}
            />
            <TimingTasks
              time="Week"
              tasks={this.state.weeklyTasks}
              edit={this.props.page}
              handleAddClickFunc={this.handleAddClick}
              deleteFunc={this.deleteTask}
              deleteModeFunc={this.toggleDeleteMode}
              deleteMode={this.state.deleteMode}
            />
            <TimingTasks
              time="Month"
              tasks={this.state.monthlyTasks}
              edit={this.props.page}
              handleAddClickFunc={this.handleAddClick}
              deleteFunc={this.deleteTask}
              deleteModeFunc={this.toggleDeleteMode}
              deleteMode={this.state.deleteMode}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TasksContainer;
