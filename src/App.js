import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'
import MovieRow from './MovieRow'
import {ListGroup} from 'react-bootstrap'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
    this.performeSearch("ant man")
  }
  performeSearch(searchTerm){
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfuly")
        const results = searchResults.results

        var movieRows = []

        results.forEach((movie) =>{
          console.log(movie.title)
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.log("Failed to fetch data")
      }
    })
  }
  
  searchChangeHandler(event) {
    const searchTerm = event.target.value
    this.performeSearch(searchTerm)
  }
  render() {
    return (
      <div className="App">

        <header>
          <div id="left_header_block">
              <img width="70" src="favicon.ico"></img>
              <h1>MovieDB Search</h1>
          </div>      
        </header>

        <input id="search_input" onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>
        <ListGroup>
          {this.state.rows}
        </ListGroup>
      </div>
    );
  }
}

export default App;
