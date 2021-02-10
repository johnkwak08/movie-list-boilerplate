import React from 'react';
import MovieData from '../MovieData.js';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: MovieData,
    }

  }

  searchedMovies(event) {

  }





  render() {
    return (
      <div className="movie-list">
        <h1>Movie List</h1>
        <div>
          <Search 
          movies={this.state.movies}/>
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