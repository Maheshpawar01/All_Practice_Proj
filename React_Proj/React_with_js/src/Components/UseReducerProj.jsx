import React, { useReducer } from 'react'

function UseReducerProj() {
    const  initialState = 0
    
    const reducer= (count, action)=>{
        switch(action){
            case "add": return count + 1;
            case "substract": return count - 1;
            case "reset": return 0;
            default:throw new console.error("unexpected action");
            
        }
    }
    const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={()=> dispatch("add")}>add</button>
        <button onClick={()=> dispatch("substract")}>substract</button>
        <button onClick={()=> dispatch("reset")}>reset</button>
    </div>
  )
}

export default UseReducerProj