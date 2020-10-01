import React, { Component } from "react";
import "./App.css";
import Header from "./Header.js";
import TasksContainer from "./TasksContainer.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: false,
      taskList: [
        { task: "Shave", complete: 0, timing: "daily" },
        { task: "Dishes", complete: 0, timing: "daily" },
        { task: "Walk dog", complete: 0, timing: "daily" },
        { task: "Pay attention to wife", complete: 0, timing: "daily" },
        { task: "Take out trash", complete: 0, timing: "weekly" },
        { task: "Water flowers", complete: 0, timing: "weekly" },
        { task: "Get groceries", complete: 0, timing: "weekly" },
        { task: "Oil cutting board", complete: 0, timing: "monthly" },
        { task: "Check finances", complete: 0, timing: "monthly" },
        { task: "Pay HOA", complete: 0, timing: "monthly" }
      ]
    };
    this.changePage = this.changePage.bind(this);
    this.handleAlterComplete = this.handleAlterComplete.bind(this);
  }

  changePage() {
    let newPage = !this.state.page;
    this.setState({ page: newPage });
  }

  handleAlterComplete(index) {
    let newTaskList = [...this.state.taskList];
    newTaskList[index].complete = !newTaskList[index].complete;
    this.setState({
      taskList: newTaskList
    });
  }

  render() {
    const { taskList, page } = this.state;

    return (
      <div>
        <Header changePageFunc={this.changePage} />
        <TasksContainer
          taskList={taskList}
          handleAlterComplete={this.handleAlterComplete}
          page={page}
        />
      </div>
    );
  }
}

export default App;
