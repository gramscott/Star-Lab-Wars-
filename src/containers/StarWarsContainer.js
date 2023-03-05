import React, {useEffect, useState} from 'react'
import MovieDetail from '../components/MovieDetail'
import MovieList from '../components/MovieList'

const StarWarsContainer = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
      fetch("https://swapi.dev/api/films/")
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.log(error))
    }, [])
    

  return (
    <div>
          <MovieList movies={movies}/>
    </div>

  )
    }

    





export default StarWarsContainer