import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import TasksContainer from './Tasks-container.js';
import EditContainer from './EditContainer.js';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			page: true,
		}

	    this.changePage = this.changePage.bind(this);
	}

  changePage() {
  	let newPage = !this.state.page;
  	this.setState({page: newPage}, function() {
  		console.log(this.state.page)
  	})
  }

  render() {
  	const setPage = this.state.page ? (<TasksContainer />) : (<EditContainer />);

    return (
      <div>
        <Header 
          changePageFunc = {this.changePage}
        />
        {setPage}
      </div>
    );
  }
}

export default App;
