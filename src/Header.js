import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		day: "",
  		dayLong: "", 
  		month: "",
  		weekDay: "",
  		dateText: "",
      active: ["active", ""],
  	}

  	this.componentDidMount = this.componentDidMount.bind(this);
    this.changePageClick = this.changePageClick.bind(this);
  }


componentDidMount() {
  const DATE = new Date();
  let day = this.getDayNumber(DATE);
  console.log(day);
  let dayLong = this.getDayLong(day);
  let month = this.getMonthNumber(DATE);
  let weekDay = this.getWeekday(DATE);
  let dateText = weekDay + ", " + month + " " + dayLong;
  this.setState({day: day, dayLong: dayLong, month: month, weekDay: weekDay, dateText: dateText});
}

getDayNumber(DATE) {
  return DATE.getDate();
}

getDayLong(day) {
  switch (day) {
    case 1:
      return day + "st";
    case 21:
      return day + "st";
    case 31:
      return day + "st";
    case 2:
      return day + "nd";
    case 22:
      return day + "nd";
    case 3:
      return day + "rd";
    case 23:
      return day + "rd";
    default:
      return day + "th";
  }
}

getMonthNumber(DATE) {
  let month = DATE.getMonth();
  switch (month) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
    default:
      break;
  }
}

getWeekday(DATE) {
  let weekDay = DATE.getDay();
  switch (weekDay) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default: 
      break;
  }
}

changePageClick(item) {
  if (item.target.className.indexOf('active') !== -1){
  } else {
    if (item.target.id === "edit"){
      this.setState({active: ["", "active"]});
    } else {
      this.setState({active: ["active", ""]});
    }
    this.props.changePageFunc();
  }
}

  render() {
    return (
    <div className = 'header'>
	 	<div className="date-all">
	      <div className="circle-num">
	        <div className="circle">
	          <p className="date-num">{this.state.day}</p>
	        </div>
	      </div>
	      <div className="date">
	        <p className="date-info">{this.state.dateText}</p>
	      </div>
	    </div>
	    <div className="nav">
	      <ul>
	        <li className={this.state.active[0]} id = "tasks" onClick = {this.changePageClick}>Tasks</li>
	        <li className={this.state.active[1]} id = "edit" onClick = {this.changePageClick}>Edit</li>
	      </ul>
	    </div>
	 </div>
    );
  }
}

export default Header;


