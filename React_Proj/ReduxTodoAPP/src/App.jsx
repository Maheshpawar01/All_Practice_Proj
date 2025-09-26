import { useState} from 'react'
import { v4 as uuid } from 'uuid'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo, deleteTodo } from './slices/todoSlice'

function App() {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos?.todos || [])

  console.log({todos})


 const onAddtodoClick=()=>{
    if (!todo.trim()) return;
  dispatch(addTodo({
    id:uuid(),
    todo:todo
  }
  ))
  setTodo('')
  // console.log({todos})
 }

 const onDeleteClick=(id)=>{
  dispatch(deleteTodo({
    id:id
  }))
 }


  return (
    <>
    <h1>TodoApp</h1>
    <div>
      <input value={todo} type="text" placeholder='write your do here...' onChange={e=> setTodo(e.target.value)} />
      <button   disabled={!todo.trim()} className='cursor-pointer' onClick={onAddtodoClick}>Add todo</button>
    </div>

    {
      todos?.length > 0 && todos.map((t)=>(

        <div key={uuid()}>
          <span>{t.todo}</span>
          <button className='cursor-pointer' onClick={()=>onDeleteClick(t.id)}>Delete</button>
        </div>
      )       
      )
    }

    </>
  )
}

export default App
