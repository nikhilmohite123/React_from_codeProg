import React from 'react'
import { redirect, useLoaderData } from 'react-router-dom'
import Movie from './Movie';
function MovieList() {
    const {responce,isError,errorMsg} = useLoaderData();
    if(isError){
        return <h1>{errorMsg}</h1>
        
    } 
    
    const data=responce?.data;
if(data.Response=="False"){
    return <h1>{data.Error}</h1>
}

    
  return (
    <>
    
    {
      data.Search && data.Search.map((movie)=>{
       return <Movie {...movie} key={movie.imdbID }/>
        })
    }


    </>
    
  )
}

export default MovieList