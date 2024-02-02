import React from 'react'
import {createPortal} from 'react-dom'
function ReactPortal() {
    return createPortal(
    <>
    <h2>i am using Reactportal</h2>
    </>
  ,document.getElementById("rootPortal"))
}

export default ReactPortal