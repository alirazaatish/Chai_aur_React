import React, {useState} from "react";

const Demo = ()=>{

    const [fruit, setFruit] = useState(
        {
            first: "Apple",
            second: "Orange",
            third: "Banana"
        }
    )

    const changeFruitName= ()=>{
        setFruit({...fruit, first: "Naspati"})
        setFruit((prev)=>({...prev, third: "Mango"}))
    }

    return(
        <>
        <div>
            <h1>List</h1>
            <h4>
                <li>{fruit.first}</li>                
                <li>{fruit.second}</li>                
                <li>{fruit.third}</li>                
            </h4>
            <button onClick={changeFruitName}>Change Fruit Name</button>
        </div>
        </>
    )
}

export default Demo