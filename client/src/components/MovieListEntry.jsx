import React from 'react';
// import App from './App.jsx';

var MovieListEntry = (props) => (
    <div className='movie-list-entry'>
        <div>{props.movie.title}</div>
    </div>
)


export default MovieListEntry;