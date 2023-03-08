import React, {useState} from 'react'
import MovieDetail from './MovieDetail'


const MovieList = ({movies}) => {

    const movieItems = movies.sort((a, b) => a.episode_id > b.episode_id ? 1 : -1)
    .map((movie) => {
        return <MovieDetail key={movie.episode_id} movie={movie} />
      })


      return (
        <div>
              <ul>
                {movieItems}
              </ul>
        </div>
      )

}

export default MovieList