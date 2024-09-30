import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordOnClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-lg p-8 bg-gray-800 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Password Generator</h1>
        <div className="flex items-center mb-4 p-2 bg-gray-700 rounded-md shadow-inner">
          <input
            type="text"
            value={Password}
            className="flex-1 p-2 border-none bg-gray-900 text-orange-300 rounded-md"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordOnClipBoard}
            className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Copy
          </button>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <span className="text-lg text-orange-400">Length: {length}</span>
          </div>
          <div className="flex flex-col gap-4">
            <label className="flex items-center text-orange-300">
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed(prev => !prev)}
                className="form-checkbox"
              />
              <span className="ml-2 text-lg">Include Numbers</span>
            </label>
            <label className="flex items-center text-orange-300">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed(prev => !prev)}
                className="form-checkbox"
              />
              <span className="ml-2 text-lg">Include Special Characters</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
