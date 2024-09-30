import { useState } from 'react'
import Form from './components/Form'
import PropsVsState from './components/PropsVsState'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Form/> */}
    <PropsVsState/>
    </>
  )
}

export default App
