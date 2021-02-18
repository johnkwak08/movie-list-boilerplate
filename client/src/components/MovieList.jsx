import React from 'react';
import MovieItem from './MovieItem.jsx';

const MovieList = (props) => (
    <div>
        {props.movies.map((movie, idx) => 
            <MovieItem key={movie.title + idx} movie={movie}
            />
        )}
    </div>

)

export default MovieList;