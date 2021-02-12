import React from 'react';
import App from './App.jsx';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
          
    }

    handleChange(event) {
        this.setState({input: event.target.value})
      }
    
    handleSubmit(event) {
    event.preventDefault();
    this.props.searchedMovies(this.state.input);
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>
                <input type='text' 
                value={this.state.input}
                onChange={this.handleChange}/>
            </label>
            <button>Go!</button>
        </form>

        )
    }


}


export default Search;