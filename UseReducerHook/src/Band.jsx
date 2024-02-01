import React from 'react'
import { useReducer } from 'react'

const initialState=[
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
]

function reducer(Bandlist,action){
    if(action.type==="ADD_LIST"){
        return [...Bandlist,{name:"mafia muder",id:crypto.randomUUID()}]
    }
    return Bandlist
}
function Band() {
  const [Bandlist,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <ol>
            {
                Bandlist.map((band)=>{
                    return <li key={band.id}>{band.name}</li>
                })
            }
        </ol>
        <button onClick={()=>{
            dispatch({
                type:"ADD_LIST"
            })
        }}>Add</button>
    </div>
  )
}

export default Band