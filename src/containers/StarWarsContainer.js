import React, {useEffect, useState} from 'react'
import MovieDetail from '../components/MovieDetail'
import MovieList from '../components/MovieList'

const StarWarsContainer = () => {

    const [movies, setMovies] = useState([])
    const [characters, setCharacters] = useState([])
    const [selectedMovie, setSelectedMovie] = useState([])

    useEffect(() => {
      fetch("https://swapi.dev/api/films/")
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.log(error))
    }, [])

    const onMovieClick = (movie) => {

      const characterPromises = movie.characters.map((character) => {
          return fetch (character).then(res => res.json())
      });
        
      }
      Promise.all( characterPromises)
      .then((data) => {
          setCharacters(data)
          setSelectedMovie(movie);
      })
    

  return (
    <div>
          <MovieList movies={movies}/>
    </div>

  )
    }


export default StarWarsContainer