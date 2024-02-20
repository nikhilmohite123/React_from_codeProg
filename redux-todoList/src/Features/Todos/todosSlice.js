import {createSlice} from '@reduxjs/toolkit'

const initialState=[
    {id:1,title:"play",completed:false},
    {id:2,title:"play music",completed:false},
    {id:3,title:"homework",completed:false},

]
const todosSlice=createSlice({
    name:"Todos",
    initialState:initialState,
    reducers:{
        // addTodo:(state,actions)=>{
        //   const newTodo= actions.payload
        //   return [...state,newTodo]
        // },
        addTodo:{
          reducer:(state,actions)=>{ 
        state.push(actions.payload)
          },
          prepare:(title)=>{
          return  {
            payload:{
                id:crypto.randomUUID(),
                title:title,
                completed:false


            }
}
          }
        },
        delTodo:(state,actions)=>{
           
            return state.filter((todo)=>{
                return todo.id!=actions.payload
            })
           
        },
        toggle:(state,actions)=>{
            return state.map((todo)=>{
                if(todo.id==actions.payload){
                    return {...todo,completed:!todo.completed.todo}
                }
                else{
                    return {...todo}
                }
            })

        }

    }
})
export const {addTodo,delTodo,toggle}=todosSlice.actions
export default todosSlice.reducer