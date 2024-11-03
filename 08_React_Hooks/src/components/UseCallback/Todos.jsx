import React from "react";
import { memo } from "react";

const Todos = ({todo, addTodo})=>{

    console.log("Child is re_rendering!!");

    return(
        <>
       <h2>My Todos</h2>
      {todo.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
        </>
    )
}

export default memo(Todos);
