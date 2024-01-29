import { useState } from "react"
import RockBand from "./RockBand";

function App() {
  console.log("render")
  const [rockBands, setRockBands] = useState([
    { name: "Queen", id: 1 },
    { name: "Led Zeppelin", id: 2 },
    { name: "The Rolling Stones", id: 3 },
    { name: "The Beatles", id: 4 },
    { name: "AC/DC", id: 5 },
    { name: "Pink Floyd", id: 6 },
    { name: "Nirvana", id: 7 },
    { name: "Guns N' Roses", id: 8 },
    { name: "The Who", id: 9 },
    { name: "Metallica", id: 10 },
]);
function addBand(){
  setRockBands(prev=>{
    return [...prev,{name:"mafia Munder",id:crypto.randomUUID()}]
  })
}

  return (
    <>
    <ol>
      {
        rockBands.map((band)=>{
          // it is band ...
          // return <li><RockBand name={band.name} key={crypto.randomUUID()} /></li>

          
          return <li><RockBand name={band.name} key={band.id} /></li>
        })
      }
    </ol>
    <button onClick={addBand}> add</button>
    </>
  )
}

export default App
