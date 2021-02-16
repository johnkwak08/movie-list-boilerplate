import React from 'react';
import MovieItem from './MovieItem.jsx';

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

        
    }




    render() {
        return(
            <div>
                {this.props.movies.map((movie, idx) => 
                  <MovieItem key={movie.title + idx} movie={movie}/>
                )}
            </div>
        )
    }
}

export default MovieList;