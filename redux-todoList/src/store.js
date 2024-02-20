import {configureStore} from '@reduxjs/toolkit'
import todosReducer from './Features/Todos/todosSlice'


export const store=configureStore({
    reducer:{
        todos:todosReducer
    }
})
