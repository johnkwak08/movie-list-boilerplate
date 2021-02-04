import React from 'react';
import MovieData from '../MovieData.js';
import MovieList from './MovieList.jsx';
import MovieListEntry from './MovieListEntry.jsx';
import Search from './Search.jsx';
// import MovieListEntry from './MovieListEntry.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: MovieData,
      searchMovies: MovieData,
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
      
    }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(value) {
    var data = this.state.movies;
    // how do you pull the title from the data list using 
    // state? 
    var searched = data.filter(() => {
      return value.toLowerCase().indexOf(searched.toLowerCase()) !== -1
    })
    this.setState({searchMovies: searched})
  }

  render() {
    return (
      <div className="movie-list">
        <h1>Movie List</h1>
        <div>
          <Search value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        </div>
        <div>
          <MovieList movies={this.state.movies}/>
        </div>
      </div>

    )
  };

}

export default App;