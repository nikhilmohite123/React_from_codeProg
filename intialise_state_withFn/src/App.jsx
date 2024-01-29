import { useState } from 'react'
function rockBandsList(){
  console.log("rendered")
  const nameA=["a","b",'c','d','e','f','g','h','i','k']
  const arr=[]
  for(let i=0; i<10; i++){
let obj={id:i,name:[nameA[i]]};
  arr.push(obj);
  }
  return arr;
}


function App() {
 const[rockBands,setRockBand]=useState(rockBandsList)

 function addBand(){
  setRockBand(prev=>{
    return [...prev,{id:crypto.randomUUID(),name:"mafia"}]
  })
 }
  return (
    <>
     
    <ol>
      {
        rockBands.map((band)=>{
          // it is band ...
          // return <li><RockBand name={band.name} key={crypto.randomUUID()} /></li>

          
          return <li key={band.id}>{band.name}</li>
        })
      }
    </ol>
    <button onClick={addBand}> add</button>
    </>
    
  )
}

export default App
