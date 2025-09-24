import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from '../slices/counterSlice'

function counter() {
    const dispatch = useDispatch()

    const {count} = useSelector((state)=> state.counter)
    
    const onupClick=()=>{
        dispatch(increment())
    }
  return (
    <div>
        <h1>counter</h1>
        <button onClick={onupClick}>up</button>
        {count}
        <button onClick={()=>dispatch(decrement())}>down</button>
    </div>
  )
}

export default counter