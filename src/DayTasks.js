import React, { Component } from 'react';
import './Tasks.css';

class DayTasks extends Component {
  constructor(props) {
  	super(props);

  }


componentDidMount() {

}


  render() {
    return (
      <div className="content-time" id="day">
        <div className="content-header">
          <div className = "filler">
          </div>
          <h1>Day</h1>
          <div className="content-stats" id="stats-day">
            <h2>5/5</h2>
          </div>
        </div>
        <p id = "p-day0"></p>
        <input className="add-button" id = "add-day" type="button" value="add"></input>
      </div>
    );
  }
}

export default DayTasks;
