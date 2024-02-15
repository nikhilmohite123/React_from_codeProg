import React from 'react'
import { Link } from 'react-router-dom'
function Movie({Title,imdbID}) {
  return (
    <div>
     <Link to={`detail/${imdbID}`}><p>title :{Title}</p></Link> 
        
    </div>
  )
}

export default Movie