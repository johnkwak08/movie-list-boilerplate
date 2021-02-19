import React from 'react';
import MovieData from '../MovieData.js';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import Add from './Add.jsx';
const axios = require('axios');



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: MovieData,
      searchInput: '',
      addInput: '',
      inputMovies: [],
      addedMovies: [],
      searched: false, 
      watched: [], 
      toWatch: MovieData,
      watchedIsSelected: false,
      toWatchedIsSelected: false
      
    }

    this.searchedMovies = this.searchedMovies.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddChange = this.handleAddChange.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
    this.addMovies = this.addMovies.bind(this);
    this.onToWatchedClick = this.onToWatchedClick.bind(this);
    this.onWatchedClick = this.onWatchedClick.bind(this);
    

  }

  componentDidMount() {
    this.getMovies();
    
  }
  
  getMovies() {
    axios.get('https://api.themoviedb.org/3/movie/550?api_key=bbda037578a13e86f5992dc17d514e75')
      .then((response) => {
        console.log('Completed', response);
        console.log(response.data.release_date);
        // get the response
        // then map through each object that we receive
        const newMovies = this.state.movies.map((movie) => 
          movie.release_date, 

        )
        // creating a new array of objects containing only key value pairs we need 
        // setState to new array 
      })
      .catch((err) => {
        console.log('Error', err);
      })
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

  onWatchedClick(movie) {
    var data = this.state.movies;
    var watchedMovie = data.filter((movie) => {
      return movie.watched === true;
    })

    this.setState({watched: watchedMovie, toWatchedIsSelected: false})

    console.log('watched' , this.state.watched);
  }

  onToWatchedClick(movie) {
    var data = this.state.movies;
    var toWatchedMovie = data.filter((movie) => {
      return movie.watched === false;
    })
    this.setState({toWatch: toWatchedMovie, toWatchedIsSelected: true} )

    console.log('to watched' , this.state.toWatch);

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
        <button onClick={this.onWatchedClick}>Watched</button>
        <button onClick={this.onToWatchedClick}>To Watch</button>
        {this.state.toWatchedIsSelected ? <MovieList movies={this.state.toWatch} /> : <MovieList movies={this.state.watched} />}
        {this.state.searched ? <MovieList movies={this.state.inputMovies} /> : null }
      </div>

    )
  };

}

export default App;