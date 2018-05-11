import React, { Component } from 'react';
import './TasksContainer.css';

class TasksContainer extends Component {
  constructor(props) {
  	super(props);

  }


componentDidMount() {

}


  render() {
    return (
      <div id="slides">
        <div className="slide slide0">
          <div className="content">
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
