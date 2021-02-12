import React from 'react';
import MovieData from '../MovieData.js';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: MovieData,
      inputMovies: []
    }

    this.searchedMovies = this.searchedMovies.bind(this);

  }

  addMovies(event) {

  }

  searchedMovies(event) {
    var filtered = [];
    var data = this.state.movies;
    var searched = data.filter((movie) => {
        return movie.title.includes(event);
    })
    for (var i = 0; i < searched.length; i++) {
      filtered.push(searched[i].title);
    }
    this.setState({inputMovies: filtered})
    console.log(this.state.inputMovies);
  }


  render() {
    return (
      <div className="movie-list">
        <h1>Movie List</h1>
        <div>
          <Search 
          movies={this.state.movies} searchedMovies={this.searchedMovies}/>
        </div>
        <div>
          <MovieList 
          movies={this.state.movies}/>
        </div>
      </div>

    )
  };

}

export default App;