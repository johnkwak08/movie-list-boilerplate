import React from 'react';
import MovieItem from './MovieItem.jsx';

const MovieList = (props) => (
    <div>
        {props.movies.map((movie, idx) => 
            <MovieItem key={movie.title + idx} movie={movie}
            // onToWatchedClick={props.onToWatchedClick}
            // onWatchedClick={props.onWatchedClick}
            />
        )}
    </div>

)

export default MovieList;