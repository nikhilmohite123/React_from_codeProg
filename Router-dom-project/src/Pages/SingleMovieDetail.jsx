import React from 'react'
import { apiKey } from '../constant';
import { useLoaderData } from 'react-router-dom';

export async function loader({params}){
  
   const newUrl=`http://www.omdbapi.com/?apikey=${apiKey}&i=${params.imdbid}`
   const response=await fetch(newUrl);
   const data=await response.json();
   return data;
    
        
    }
function SingleMovieDetail() {
    const data=useLoaderData();
    console.log(data)
  return (
    <div>
        <p>title:{data.Title}</p>
        <p><a href={`${data.Poster}` } target="_self">Poster</a></p>
        
    </div>
  )
}

export default SingleMovieDetail