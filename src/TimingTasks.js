import React, { Component } from "react";
import "./Header.css";
import Task from "./task.js";

class TimingTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskComplete: [],
      taskSum: 0,
      newTask: "Hit Enter"
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.saveTask = this.saveTask.bind(this);
  }

  componentDidMount() {
    let taskComplete = [];
    for (let i in this.props.tasks) {
      taskComplete.push(0);
    }
    this.setState({ taskComplete: taskComplete });
  }

  toggleTask(index) {
    let taskComplete = this.state.taskComplete;
    if (taskComplete[index] === 1) {
      taskComplete[index] = 0;
    } else {
      taskComplete[index] = 1;
    }
    let taskSum = taskComplete.reduce(function(num, sum) {
      return num + sum;
    });
    this.setState({ taskComplete: taskComplete, taskSum: taskSum });
  }

  handleAddClick() {
    this.props.handleAddClickFunc(this.props.time);
    let taskComplete = [...this.state.taskComplete];
    taskComplete.push(0);
    this.setState({ taskComplete });
  }

  handleChange(event) {
    this.setState({ newTask: event.target.value }, function() {
    });
  }

  deleteTask(index) {
    this.props.deleteFunc(index, this.props.time);
    let taskComplete = [...this.state.taskComplete];
    if (taskComplete[index] === 1) {
      taskComplete.splice(index, 1);
      let taskSum = this.state.taskSum;
      taskSum--;
      this.setState({ taskComplete, taskSum });
    } else {
      taskComplete.splice(index, 1);
      this.setState({ taskComplete });
    }
  }

  saveTask(task, index) {
    this.props.saveTask(task, index, this.props.time)
  }

  render() {
    const edit = this.props.edit ? (
      <div className="edit-buttons">
        <button
          className="add-button"
          id="add-day"
          type="button"
          onClick={this.handleAddClick}
        >
          +
        </button>
      </div>
    ) : (
      <div></div>
    );
    return (
      <div className="content-time" id={this.props.time}>
        <div className="content-header">
          <div className="filler"></div>
          <h1>{this.props.time}</h1>
          <div className="content-stats" id="stats-day">
            <h2>
              {this.state.taskSum}/{this.state.taskComplete.length}
            </h2>
          </div>
        </div>
        <p id="p-day0"></p>
        {this.props.tasks.map((task, i) => {
          return (
            <Task
              key={task.timing + i}
              index={i}
              task={task.task}
              active={this.state.taskComplete[i]}
              toggleTaskFunc={this.toggleTask}
              deleteFunc={this.deleteTask}
              deleteMode={false}
              deleteCompleted={this.deleteCompletedTask}
              edit={this.props.edit}
              time={this.props.time}
              saveTask={this.saveTask}
            />
          );
        })}
        {edit}
      </div>
    );
  }
}

export default TimingTasks;
