import { useState } from 'react'
import Demo from './components/Demo'
import MyForm from './components/MyForm'
import Form from './components/Form'
import PropsVsState from './components/PropsVsState'
import Parent from './components/PropsMethod'
import ListRendring from './components/ListRendring'
import Todo  from './components/Todo'
import DataProvider from './components/useContext/context'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <DataProvider />
    {/* <Demo /> */}
    {/* <MyForm /> */}
    {/* <Form/> */}
    {/* <PropsVsState/> */}
    {/* <Parent name="ALi" rollNo="1234" /> */}
    {/* <ListRendring /> */}
    {/* <Todo /> */}
    </>
  )
}

export default App
