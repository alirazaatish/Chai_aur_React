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
      setCounterValue(counterValue+1);
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

export default App
