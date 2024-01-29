import React from 'react'

function PropsWarn({count}) {
    // typeError: Cannot assign to read only property 'count' of object 
//   props.count+=2;


// when destructured props we can able mute
count+=2;
  return (

    <span>{count}</span>
  )
}

export default PropsWarn