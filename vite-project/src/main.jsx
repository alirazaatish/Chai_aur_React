import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Chai, Creatdiv} from './chai.jsx'


// const anotherElement=(
//   <a href="https://www.google.com" target="_blank"><h1>Visit Google!</h1></a>
// )

const ReatElement= React.createElement(
  'a',
  {href:"https://www.google.com", target:"_blank"},
  'Click Google To Visit'
)

const userName = "Aimen Jee"
const UserCreat = React.createElement(
  'p',
  "Wellcome! ",
  userName
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Chai/>
    <Creatdiv/>
    {ReatElement}
    {UserCreat}
  </StrictMode>,
)
