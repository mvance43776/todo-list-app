import React, { Component } from 'react';
import './Tasks.css';

class WeekTasks extends Component {
  constructor(props) {
  	super(props);

  }


componentDidMount() {
  console.log(this.props.tasks)
}


  render() {
    return (
      <div className="content-time" id="month">
        <div className="content-header">
          <div className = "filler">
          </div>
          <h1>Month</h1>
          <div className="content-stats" id="stats-month">
            <h2>5/5</h2>
          </div>
        </div>
        <p id = "p-month0"></p>
        <input className="add-button" id = "add-month" type="button" value="add"></input>
      </div>
    );
  }
}

export default WeekTasks;
