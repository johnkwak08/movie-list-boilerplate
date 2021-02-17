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
      searched: false, 
      watched: [], 
      toWatch: [],
      watchedIsSelected: false
      
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
    } else if (this.state.watchedIsSelected) {
      return (
        <div>
          <MovieList 
          movies={this.state.watched}/>
        </div>
      ) 
    } else {
        return (
          <div>
            <MovieList 
            movies={this.state.movies}
            onToWatchedClick={this.onToWatchedClick}
            />
          </div>
        )
      }
      
  }

  onToWatchedClick(movie) {
    var data = this.state.movies;
    var watchedArr = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i].watched === true) {
          if (watchedArr[data[i].title] === undefined) {
            watchedArr.push(data[i]);
            this.setState({watched: watchedArr})
        }
      }
    }
    console.log('watched' , this.state.watched);
    return (
      <div>
          <MovieList 
          movies={this.state.watched}/>
      </div>
    )
  }

  onWatchedClick() {
    var data = this.state.movies;
    var toWatchedArr = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i].watched === true) {
          if (toWatchedArr[data[i].title] === undefined) {
            toWatchedArr.push(data[i]);
            this.setState({toWatch: toWatchedArr})
            
      }
      }
    }
    this.setState({watchedIsSelected: !this.state.watchedIsSelected})
    console.log('towatch' , this.state.toWatch);
    // return (
    //   <div>
    //       <MovieList 
    //       movies={this.state.toWatch}/>
    //   </div>
    // )

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
        <button onClick={() => this.onToWatchedClick()}>To Watch</button>
        {this.switchMovies()}
      </div>

    )
  };

}

export default App;