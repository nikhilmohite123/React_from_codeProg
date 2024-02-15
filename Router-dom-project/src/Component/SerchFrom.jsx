import React from 'react'
import { Form } from 'react-router-dom'

function SerchFrom({serchparam}) {
    
  return (
   <Form>
  <input type="text" name="serch" required defaultValue={serchparam}/>
  <button type='submit'>Serch</button>


   </Form>
  )
}

export default SerchFrom