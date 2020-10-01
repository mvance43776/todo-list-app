import React, { Component } from "react";
import "./Header.css";
import TrashIcon from "./TrashIcon";

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskText: this.props.task,
    };

    this.taskClicked = this.taskClicked.bind(this);
    this.deleteState = this.deleteState.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  componentDidMount() {}

  taskClicked() {
    this.props.toggleTaskFunc(this.props.index);
  }

  deleteState() {
    this.props.deleteFunc(this.props.index);
  }

  inputChange(e) {
    let taskText = e;
    this.setState({ taskText });
  }

  keyPress(event) {
    if (event.key === "Enter") {
      this.props.saveTask(this.state.taskText, this.props.index);
    }
  }

  render() {
    return (
      <div className="task">
        {this.props.task !== "" ? (
          <p
            className={this.props.active ? "strikethrough" : ""}
            id={"p-day" + (this.props.index + 1)}
            index={this.props.index}
            onDoubleClick={() => this.taskClicked(this)}
          >
            {this.props.task}
          </p>
        ) : (
          <p>
            <input
              className={this.props.active ? "strikethrough" : ""}
              id={"p-day" + (this.props.index + 1)}
              index={this.props.index}
              placeholder="add a task and hit enter"
              onDoubleClick={() => this.taskClicked(this)}
              onChange={(e) => this.inputChange(e.target.value)}
              onKeyPress={this.keyPress}
            ></input>
          </p>
        )}
        {this.props.edit ? (
          <span className="trash" onClick={this.deleteState}>
            <TrashIcon />
          </span>
        ) : null}
      </div>
    );
  }
}

export default Task;
