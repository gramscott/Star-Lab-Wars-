import React, {useState, useEffect} from 'react'

const MovieDetail = ({movie}) => {

  return (

    <div>
        <li ><b>Star Wars:{movie.title} </b></li>
        <button type="submit">Show Characters</button>
    </div>
    

  )

}

export default MovieDetail
