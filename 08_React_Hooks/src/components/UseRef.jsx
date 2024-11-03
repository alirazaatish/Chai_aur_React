import React, { useEffect, useRef, useState } from "react";

// const UseRefHook = ()=>{
//     const [name, setName] = useState("I love You");
//     const refElement = useRef("");

//     const ResetNeme = ()=>{
//         setName("");
//         refElement.current.focus();
//     }

//     const TextColorChange =()=>{
//         refElement.current.style.color="red";
//     }

//     const ChangeValue =(e)=>{
//         console.log(name);
//         setName(e.target.value);
//     }

//     return(
//         <>
//         <h1>UseRef Hook In React</h1>
//         <input 
//             ref={refElement}
//             type="text" 
//             value={name}
//             onChange={ChangeValue}
//         />
//         <button 
//             type="button"
//             onClick={ResetNeme}
//         >Reset</button>
//         <button 
//             type="button"
//             onClick={TextColorChange}
//         >Text Color Blue</button>
//         </>
//     )
// }

// export default UseRefHook;


const UseRefHook = ()=>{

    console.log("Component Re_render>>>>>>");

    const [count, setCount] = useState(0);

    const ref = useRef(5);

    // useEffect(()=>{
    //     ref.current=ref.current+5;
    // })

    const IcrementInA = ()=>{
        ref.current= ref.current+5;
        console.log("VALUE", ref.current);
    }

    return(
        <>
        <h1>Value Of Ref : {ref.current} </h1>
        <h1>Value Of Count : {count} </h1>
        <button onClick={()=> IcrementInA()}>Add Ref Value</button>
        <button onClick={()=>setCount(count+1)}>Add Count Value</button>
        </>
    )
}

export default UseRefHook