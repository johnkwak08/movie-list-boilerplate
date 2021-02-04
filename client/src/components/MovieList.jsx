import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

var MovieList = (props) => (
    <div>
        {props.movies.map(movie => 
            <MovieListEntry movie = {movie}  />
            )}
            
    </div>
)

export default MovieList;