import {memo} from 'react'

function Card({state1}) {
    console.log("card rendred")
  return (
    <div style={{
        margin:"1rem",
        height:"300px",
        width:"500px",
        backgroundColor:`${state1?'green':'red'}`

    }}>
card


    </div>
  )
}

export default memo(Card)