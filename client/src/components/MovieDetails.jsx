import React from 'react';

const MovieDetails = props => (
    console.log(props),
  <div>
      Year: {props.movie.year} <br />
      Runtime: {props.movie.runtime} <br />
      ImdbRating: {props.movie.rating} <br /> 
  </div>
)

export default MovieDetails;