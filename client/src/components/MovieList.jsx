import React from 'react';

var MovieList = (props) => (
    <div>
        {props.movies.map(movie => 
            <div> {movie.title} </div>
            )}
            
    </div>
)

export default MovieList;