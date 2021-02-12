import React from 'react';

var MovieList = (props) => (
    <div>
        {props.movies.map((movie) => 
            <div key={movie.title}> {movie.title} </div>
            )}
            
    </div>
)

export default MovieList;