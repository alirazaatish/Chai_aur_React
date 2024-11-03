import React, { useCallback, useReducer, useState }  from "react";


// const UseReducerHook = ()=>{

//     let initialState = 0;

//     const reducer = (state, action)=>{
//         switch (action){
//             case "Increment":
//                 return state+1;
//             case "Decrement":
//                 return state-1;
//             default:
//                 return state;
//         }
//     }

//     const [ counter, dispatch ] = useReducer(reducer, initialState)

//     return(
//         <>
//         <h1>UseReducer Hook In React Addional Hook</h1>

//         <h2>Counter {counter}</h2>
//         <button type="button" onClick={()=>dispatch("Increment")}>Increment</button>
//         <button type="button" onClick={()=>dispatch("Decrement")}>Decrement</button>
//         </>
//     )
// }

// export default UseReducerHook




const initialTodos =[
    {
        id: 1,
        title: "Hi Jana man ...!",
        checked: false
    },
    {
        id: 2,
        title: "Kasy ho tum!!",
        checked: false
    }
]

const reducer = (state, action)=>{
    if(action.type=="COMPELETE"){
        return(
            state.map((todo)=>{
                if(todo.id === action.id){
                    return {...todo, checked: !todo.checked, title: "Mission Sucessful !!" }
                }
                return todo
            })
        )
    }
    return state;
}



const Todo = ()=>{

    const [ count, setCount ] = useState(0);

    const [ todos, dispatch ] = useReducer(reducer, initialTodos)

    const handleComplete = useCallback((todo) => {
        if (todo && todo.id) {
            console.log("Toggling completion for todo:", todo);
            dispatch({ type: "COMPELETE", id: todo.id });
        } else {
            console.warn("Todo is undefined or missing an ID:", todo);
        }
    }, [dispatch])

    return(
        <>
        {todos.map(todo => (
            <div key={todo.id}>
                <label>
                    <input
                        type="checkbox"
                        checked={todo.checked}
                        onChange={() => handleComplete(todo)}
                    />
                    {todo.title}
                </label>
            </div>
        ))}

        <h1>Count: {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Update Value</button>
    </>
    )
}

export default Todo;