import React, { useCallback, useState } from "react";
import Todos from "./Todos";

const UseCallback = ()=>{

    const [ count, setCount ] = useState(0);
    const [ todo, setTodo ] = useState([]);

    const addTodo = useCallback(()=>{
        setTodo((t)=>[...t, "Hello World!"])
    },[todo]) 


    return(
        <>
        <Todos todo={todo} addTodo={addTodo}/>

        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Change Count</button>
        </>
    )
}

export default UseCallback;
