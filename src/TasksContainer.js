import React, { Component } from "react";
import "./Header.css";
import TimingTasks from "./TimingTasks.js";

class TasksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasksLoaded: false,
    };
    this.handleAddClick = this.handleAddClick.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.saveTask = this.saveTask.bind(this);
  }
  componentDidMount() {
    let dailyTasks = this.props.taskList.filter(
      (task) => task.timing === "daily"
    );
    let weeklyTasks = this.props.taskList.filter(
      (task) => task.timing === "weekly"
    );
    let monthlyTasks = this.props.taskList.filter(
      (task) => task.timing === "monthly"
    );
    this.setState({
      dailyTasks,
      weeklyTasks,
      monthlyTasks,
      tasksLoaded: true,
    });
  }
  handleAddClick(time) {
    switch (time) {
      case "Day":
        let dailyTasks = [...this.state.dailyTasks];
        dailyTasks.push({
          task: "",
          complete: 0,
          timing: "daily",
        });
        this.setState({ dailyTasks });
        break;
      case "Week":
        let weeklyTasks = [...this.state.weeklyTasks];
        weeklyTasks.push({
          task: "",
          complete: 0,
          timing: "weekly",
        });
        this.setState({ weeklyTasks });
        break;
      case "Month":
        let monthlyTasks = [...this.state.monthlyTasks];
        monthlyTasks.push({
          task: "",
          complete: 0,
          timing: "monthly",
        });
        this.setState({ monthlyTasks });
        break;
      default:
        break;
    }
  }

  deleteTask(index, time) {
    switch (time) {
      case "Day":
        let dailyTasks = [...this.state.dailyTasks];
        dailyTasks.splice(index, 1);
        this.setState({ dailyTasks });
        break;
      case "Week":
        let weeklyTasks = [...this.state.weeklyTasks];
        weeklyTasks.splice(index, 1);
        this.setState({ weeklyTasks });
        break;
      case "Month":
        let monthlyTasks = [...this.state.monthlyTasks];
        monthlyTasks.splice(index, 1);
        this.setState({ monthlyTasks });
        break;
      default:
        break;
    }
  }

  saveTask(task, index, time) {
    switch (time) {
      case "Day":
        let dailyTasks = [...this.state.dailyTasks];
        dailyTasks[index].task = task;
        this.setState({ dailyTasks });
        break;
      case "Week":
        let weeklyTasks = [...this.state.weeklyTasks];
        weeklyTasks[index].task = task;
        this.setState({ weeklyTasks });
        break;
      case "Month":
        let monthlyTasks = [...this.state.monthlyTasks];
        monthlyTasks[index].task = task;
        this.setState({ monthlyTasks });
        break;
      default:
        break;
    }
  }

  render() {
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
              deleteMode={this.state.deleteMode}
              saveTask={this.saveTask}
            />
            <TimingTasks
              time="Week"
              tasks={this.state.weeklyTasks}
              edit={this.props.page}
              handleAddClickFunc={this.handleAddClick}
              deleteFunc={this.deleteTask}
              deleteMode={this.state.deleteMode}
              saveTask={this.saveTask}
            />
            <TimingTasks
              time="Month"
              tasks={this.state.monthlyTasks}
              edit={this.props.page}
              handleAddClickFunc={this.handleAddClick}
              deleteFunc={this.deleteTask}
              deleteMode={this.state.deleteMode}
              saveTask={this.saveTask}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TasksContainer;
