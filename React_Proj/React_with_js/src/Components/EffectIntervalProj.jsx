import React, { useEffect, useState } from 'react'

function EffectIntervalProj() {
    const [count, setCount] = useState(0);

    useEffect (()=>{

      const timer = setInterval(() => {
        setCount( count + 1)
      }, 1000);

        return()=>{
          clearInterval(timer)
        }
    }, [count])
  return (
    <div>
        <h1>up count</h1>
        <h2>{count}</h2>
    </div>
  )
}

export default EffectIntervalProj