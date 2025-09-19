import React, { useState } from 'react'
import { v4 as uuid} from 'uuid';



function WishlistProj() {

    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])

    const onTodoInputchage =(e)=>{
        setTodo(e.target.value)
    }

    const addtodoClick=()=>{
        setTodoList([...todoList, {id: uuid(), todo: todo}])
        setTodo('')

    }

    const onDeleteClick =(id)=>{
        const removeid = todoList.filter(item => item.id !== id)
        setTodoList(removeid)
    }

    return (
    <div>
        <h1>My whishlist</h1>
        <div>
        <input value={todo} onChange={onTodoInputchage} placeholder='add your wishlist here.....'/>
        <button onClick={addtodoClick}>Add</button>
        </div>

        <div>
            {
                todoList && todoList.map(todo =>(
                    <div key={todo.id}>
                        <label htmlFor="">
                            <input type="checkbox" />
                            <span>{todo.todo} </span>
                        </label>
                        <button onClick={()=>onDeleteClick(todo.id)}> Remove </button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default WishlistProj