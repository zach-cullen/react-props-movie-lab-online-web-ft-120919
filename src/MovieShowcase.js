import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    return movieData.map((m, i) =>
      <MovieCard 
        key={i}
        title={m.title}
        IMDBRating={m.IMDBRating} 
        genres={m.genres} 
        poster={m.poster}
      />
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
