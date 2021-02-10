import React from 'react';
import App from './App.jsx';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchMovies: [],
            input: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
          
    }

    handleChange(event) {
        var data = this.props.movies;
        this.setState({input: event.target.value})
      }
    
    handleSubmit(event) {
    event.preventDefault();
    var data = this.props.movies;
    var searched = data.filter((movie) => {
        return movie.title.includes(this.state.input);
    })
    this.setState({searchMovies: searched})
    console.log(this.state.searchMovies);
    }

    render() {
        return (
        <form>
            <label>
                <input type='text' 
                value={this.state.input}
                onChange={this.handleChange}/>
            </label>
            <button onClick={this.handleSubmit}>Go!</button>
        </form>

        )
    }


}


export default Search;