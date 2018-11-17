import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header>
          <div id="left_header_block">
              <img width="70" src="favicon.ico"></img>
              <h1>MovieDB Search</h1>
          </div>      
        </header>

        <input id="search_input" placeholder="Enter search term"/>
      </div>
    );
  }
}

export default App;
