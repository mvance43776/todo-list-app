import React, { Component } from 'react';
import './Tasks.css';

class WeekTasks extends Component {
  constructor(props) {
  	super(props);

  }


componentDidMount() {

}


  render() {
    return (
      <div className="content-time" id="week">
        <div className="content-header">
          <div className = "filler">
          </div>
          <h1>Week</h1>
          <div className="content-stats" id="stats-week">
            <h2>5/5</h2>
          </div>
        </div>
        <p id = "p-week0"></p>
        <input className="add-button" id = "add-week" type="button" value="add"></input>
      </div>
    );
  }
}

export default WeekTasks;
