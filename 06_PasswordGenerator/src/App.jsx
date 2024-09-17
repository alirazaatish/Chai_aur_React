import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  // useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str+="12345679";
    if(charAllowed) str+="!@#$%^&(){}:;<>/|";

    for (let i = 1; i < length; i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
1     
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, Password])

  useEffect(()=>{
    passwordGenerator();
  }, [length, numberAllowed, charAllowed,setPassword])

  const copyPasswordOnClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(Password);
  }, [Password])
  return (
    <>
     <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 class="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input type="text"
                  value={Password}
                  className='outline-none w-full py-1 px-3'
                  placeholder='Password'
                  readOnly
                  ref={passwordRef}
                  />
            <button
            onClick={copyPasswordOnClipBoard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
                />
                <label>Length: {length}</label>
            </div>            
            <div className="flex item-center gap-x-1">
              <input type="checkbox"
                     defaultChecked={numberAllowed}
                     onChange={()=>{
                      setNumberAllowed(((prev)=>!prev));
                     }}
               />
               <label>Number</label>
            </div>
            <div className="flex item-center gap-x-1">
              <input type="checkbox"
                     defaultChecked={charAllowed}
                     onChange={()=>{
                      setCharAllowed((pre)=>!pre);
                     }}
                     />
                     <label>Character</label>
            </div>

        </div>
     </div>
     
     
    </>
  )
}

export default App
