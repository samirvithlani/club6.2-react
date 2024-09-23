import React, { useState } from 'react'
import { useEffect } from 'react'

export const UseEffectDemo = () => {
    //() => {} is the callback function that will be executed when the component is mounted
    //[] is the dependency array, if the array is empty, the callback function will be executed only once when the component is mounted
    const [count, setcount] = useState(0)
    useEffect(()=>{
        console.log("Component Mounted")
    },[count])
  return (
    <div>
        <h1>UseEffect Demo</h1>
        <button onClick={()=>{setcount(count+1)}}>Click Me</button>
        <h2>{count}</h2>
    </div>
  )
}
