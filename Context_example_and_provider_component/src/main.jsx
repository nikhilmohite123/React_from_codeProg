import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Authprovider from './Authprovider.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(


 
    <Authprovider>
    <App/>
  </Authprovider>
 
  

)
