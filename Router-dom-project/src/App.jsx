import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'

import Root from './Pages/Root'
import Home, { loader } from './Pages/Home'
import SingleMovieDetail from './Pages/SingleMovieDetail'
import Error from './Pages/Error'
import { loader as movieLoader} from './Pages/Home'
import { loader as singalMovieLoader } from './Pages/SingleMovieDetail'
const router=createBrowserRouter(createRoutesFromElements(<Route path="/"element={<Root/> } >
  <Route index element={<Home/>}loader={movieLoader}/>
  <Route  path='/detail/:imdbid' element={<SingleMovieDetail/>} loader={singalMovieLoader}/>
 <Route path='/error' element={<Error/>}/>
</Route>))



function App() {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App