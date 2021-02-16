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
      searchInput: '',
      addInput: '',
      inputMovies: [],
      addedMovies: [],
      searched: false
      
    }

    this.searchedMovies = this.searchedMovies.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddChange = this.handleAddChange.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
    this.addMovies = this.addMovies.bind(this);
    

  }

  handleChange(event) {
    this.setState({searchInput: event.target.value})
  }
  
  handleAddChange(event) {
    this.setState({addInput: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.searchedMovies(this.state.searchInput);
  }

  handleAddSubmit(event) {
    event.preventDefault();
    this.addMovies(this.state.addInput);
  }





  addMovies(event) {
    var addedMov = this.state.movies;
    var movie = {
      title: event
    };
    addedMov.push(movie);
    this.setState({movies: addedMov});
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
          movies={this.state.movies}
          />
        </div>
      )
    }
  }


  
  render() {
    return (
      <div className="movie-list">
        <h1>Movie List</h1>
        <div>
          <Add 
          values={this.state.addInput}
          handleAddChange={this.handleAddChange}
          handleAddSubmit={this.handleAddSubmit}/>
        </div>
        <div>
          <Search 
          values={this.state.searchInput}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}/>
        </div>
        <button>Watched</button>
        <button>To Watch</button>
        {this.switchMovies()}
      </div>

    )
  };

}

export default App;