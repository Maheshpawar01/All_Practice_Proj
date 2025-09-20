import React, { useEffect, useRef, useState } from 'react'

function UseRefProj() {

    const [count, setCount] = useState(0);
    const ref = useRef()

     useEffect(()=>{
        ref.current = count;
        
     }, [count])


  return (
    <div>
        <h1>current count : {count}</h1>
        <h1> previous value : {ref.current}</h1>
        <button onClick={()=> setCount (count+1)}>Increment</button>

    </div>
  )
}

export default UseRefProj