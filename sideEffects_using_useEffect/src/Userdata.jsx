import React from 'react'

function Userdata({username,name,email}) {
  return (
    
          <div style={{
            margin:"1rem",
            padding:"1rem",
            backgroundColor:"grey",
            textAlign:"center"
          }}>
        <p>{username}</p>
        <p>{name}</p>
        <p>{email}</p>
    </div>
   
  )
}

export default Userdata