import React, { useEffect, useState } from "react";


const UseEffectHook = ()=>{

    console.log("Rendering>>>>>>>>>>>>>>>>>>>");
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);

  useEffect(() => {
//     let timer = setTimeout(() => {
//     setCount((count) => count + 1);
//   }, 3000);

        let timer = setInterval(() => {
            console.log("SetInterval Rendering!!!!!!");
        }, 2000);

  return () =>{ 
    console.log("CleanUP Function Chala!");
    clearInterval(timer)
  }
  }, [value]);

  return(
    <>
    <h1>I've rendered {count} times!</h1>;
    <h1>Value: {value}</h1>
    <button onClick={()=>setValue(value+1)}>Add Value</button>
    </>
  ) 

}

export default UseEffectHook;