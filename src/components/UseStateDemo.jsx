import React, { useState } from 'react'

export const UseStateDemo = () => {

    // var count =0;
    //it will return an array with two values
    //1st parameter is the value of the state
    //2nd parameter is the function to update the state
    //param () initial value
    const [count,setCount] =useState(0)
    //const [isActive, setisActive] = useState(false)
    //const [products, setproducts] = useState([])

    const increseCount = () => {

        //console.log("count",count);
      //  count = count + 1;
        setCount(count+1); //it will update the value of count
        console.log("count",count);

    }

  return (
    <div>
        <h1>Count = {count}</h1>
        {/* <button onClick={increseCount}>Increase Count</button> */}
        <button onClick={()=>{increseCount()}}>increse count</button>

    </div>
  )
}
