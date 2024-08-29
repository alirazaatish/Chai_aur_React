import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counterValue = 15;
  let [counterValue, setCounterValue] = useState(1);

  const addValue = ()=>{
    console.log("Value is added!", counterValue);
    // counterValue+=1
    if(counterValue<20){
      setCounterValue((prevCountr)=> prevCountr+1);
      setCounterValue((prevCounter)=> prevCounter+1);

    }
  }

  const removeValue = ()=>{
    if(counterValue>0){setCounterValue(counterValue-1);
    }
  }
    
  return (
    <>
      <h1>Chai aur Code | Sir Hetaish</h1>
      <h3>Counter Value: {counterValue} </h3>

      <button onClick={addValue}>Add Value</button>
      <br /><br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

// ========================================== UseState On Color Button ===================================


function FavoriteColor(){
  let [Color, setColor] = useState("red");
  return(
    <>
    <h1>My Favorite Color is {Color} </h1>
    <br /><br />
    <button 
    type="button"
    onClick={()=>setColor("blue")}
    >Blue</button>
    <button 
    type="button"
    onClick={()=>setColor("Yellow")}
    >Yellow</button>
    <button 
    type="button"
    onClick={()=>setColor("Green")}
    >Green</button>
    <button 
    type="button"
    onClick={()=>setColor("Grey")}
    >Grey</button>
    </>
  )
}

export { App, FavoriteColor};