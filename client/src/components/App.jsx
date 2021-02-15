import React from 'react';
import MovieData from '../MovieData.js';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import Add from './Add.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: MovieData,
      inputMovies: [],
      addedMovies: [],
      searched: false
    }

    this.searchedMovies = this.searchedMovies.bind(this);

  }

  addMovies(event) {
    var movie = {
      title: event
    };

  


  }

  searchedMovies(event) {
    var data = this.state.movies;
    var inputMovie = data.filter((movie) => {
        return movie.title.includes(event);
    })
    this.setState({
      movies: this.state.movies, 
      inputMovies: inputMovie, 
      searched: !this.state.searched})
  }

  switchMovies() {
    if (this.state.searched) {
      return (
        <div>
          <MovieList 
          movies={this.state.inputMovies}/>
        </div>
      )
    } else{
      return (
        <div>
          <MovieList 
          movies={this.state.movies}/>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="movie-list">
        <h1>Movie List</h1>
        <div>
          <Add />
        </div>
        <div>
          <Search 
          movies={this.state.movies} searchedMovies={this.searchedMovies}/>
        </div>
        {this.switchMovies()}
      </div>

    )
  };

}

export default App;