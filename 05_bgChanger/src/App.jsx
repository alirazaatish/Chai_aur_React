import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#DCDCDC");
  return (
    <>
      <div
      className="w-full h-screen duration-200 bg-red"
      style={{backgroundColor: color}}
      >
        <div
        className="fixed bottom-0 inset-x-0 px-2 py-2 flex justify-center"
        >
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

            <button
            onClick={()=> setColor("red")}
            className="outline-none px-4 py-1 shadow-lg rounded-full"
            style={{backgroundColor: "red"}}
            >Red</button>

            <button
            onClick={()=> setColor("#00FFFF")}
            className="outline-none px-4 py-1 shadow-lg rounded-full"
            style={{backgroundColor: "#00FFFF"}}
            >Aqua</button>

            <button
            onClick={()=> setColor("yellow")}
            className="outline-none px-4 py-1 shadow-lg rounded-full"
            style={{backgroundColor: "yellow"}}
            >Yellow</button>
            <button
            onClick={()=> setColor("grey")}
            className="outline-none px-4 py-1 shadow-lg rounded-full"
            style={{backgroundColor: "grey"}}
            >Grey</button>

            <button
            onClick={()=> setColor("#FFC0CB")}
            className="outline-none px-4 py-1 shadow-lg rounded-full"
            style={{backgroundColor: "#FFC0CB"}}
            >Pink</button>

            <button
            onClick={()=> setColor("#FF00FF")}
            className="outline-none px-4 py-1 shadow-lg rounded-full"
            style={{backgroundColor: "#FF00FF"}}
            >Fuchsia</button>

            <button
            onClick={()=> setColor("#FF4500")}
            className="outline-none px-4 py-1 shadow-lg rounded-full"
            style={{backgroundColor: "#FF4500"}}
            >Orange</button>

            <button
            onClick={()=> setColor("#7FFFD4")}
            className="outline-none px-4 py-1 shadow-lg rounded-full"
            style={{backgroundColor: "#7FFFD4"}}
            >Aquamarine</button>

            <button
            onClick={()=> setColor("#00FF7F")}
            className="outline-none px-4 py-1 shadow-lg rounded-full"
            style={{backgroundColor: "#00FF7F"}}
            >SpringGreen</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
